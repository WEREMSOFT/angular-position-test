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

  availableGrids: string[] = [];

  selectedGrid = this.availableGrids[0];

  sort: SortDescriptor[] = [];
  private subscriptions$: Subscription[] = [];

  constructor(private hostService: HostsService) {
  }

  ngOnInit() {
    this.subscriptions$.push(this.hostService.getHosts().subscribe(hosts => {
      this.gridDataResult = hosts;
    }));

    this.subscriptions$.push(this.hostService.getAvailableGrids().subscribe(grids => {
      this.availableGrids = grids;
      this.selectedGrid = this.availableGrids[0];
    }));
  }

  ngOnDestroy() {
    this.subscriptions$.forEach(s => s.unsubscribe());
  }

  // ACTIONS
  onSaveClick() {
    const hosts = this.sanitizeHostsList();

    this.hostService.addHosts(hosts.map(hName => Host.fromObject({ host: hName, grid: this.selectedGrid })));
  }

  onCancelClick() {
    const hosts = this.sanitizeHostsList();
    this.hostService.deleteHosts(hosts.map(hName => Host.fromObject({ host: hName, grid: this.selectedGrid })));
  }

  // GRID EVENTS
  onGridPageChange(event: PageChangeEvent) {
    this.skip = event.skip;
    this.hostService.setPage(this.skip);
  }

  onSortChange(sort: SortDescriptor[]) {
    this.sort = sort;
    this.hostService.setSort(this.sort);
  }

  private sanitizeHostsList(): string[] {
    let returnValue = this.hostsBulk.split('\n');
    returnValue = returnValue.map(item => item.trim());

    const hostsUniqueNames: Map<string, boolean> = new Map<string, boolean>();
    returnValue.forEach(name => hostsUniqueNames[name] = true);

    return Object.keys(hostsUniqueNames).filter(key => key.length !== 0);
  }
}
