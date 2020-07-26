import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { Observable, Subscription } from 'rxjs';
import { HOSTS, Host } from './model/hosts';
import { HostsService } from './model/service/hosts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})

export class MainComponent implements OnInit, OnDestroy {
  skip = 0;
  gridDataResult: GridDataResult = { data: [], total: 0 };
  multiple = true;
  allowUnsort = true;
  hostsBulk = '';
  selectedHost = '';

  availableHosts: string[] = [
    'gs-tst-test202-dev-dir-1',
    'gs-tst-test202-dev-dir-2',
    'gs-tst-test202-dev-dir-3',
    'gs-tst-test202-dev-dir-4',
    'gs-tst-test202-dev-dir-5'
  ];

  sort: SortDescriptor[] = [{
    field: 'name',
    dir: 'asc'
  },
  {
    field: 'host',
    dir: 'asc'
  }];
  private subscriptions$: Subscription[] = [];

  constructor(private hostService: HostsService) {
  }

  ngOnInit() {
    this.subscriptions$.push(this.hostService.getHosts().subscribe(hosts => {
      console.log(hosts);
      this.gridDataResult = hosts;
    }));
  }

  ngOnDestroy() {
    this.subscriptions$.forEach(s => s.unsubscribe());
  }

  onSortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.hostService.setSort(this.sort);
  }

  // ACTIONS
  onSaveClick() {
    this.hostService.addHosts([{ name: 'new', host: 'host' }]);
  }

  onCancelClick() {
    console.log('cancel click');
  }

  // GRID EVENTS
  public onGridPageChange(event: PageChangeEvent): void {
    console.log(event);
    this.skip = event.skip;
    this.hostService.setPage(this.skip);
}
}
