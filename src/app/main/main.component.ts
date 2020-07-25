import { Component, OnInit } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { hosts, Host } from './model/hosts';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  public gridData = hosts;
  public multiple = true;
  public allowUnsort = true;
  public hostsBulk = '';
  public selectedHost = '';
  public availableHosts: string[] = [
    'gs-tst-test202-dev-dir-1',
    'gs-tst-test202-dev-dir-2',
    'gs-tst-test202-dev-dir-3',
    'gs-tst-test202-dev-dir-4',
    'gs-tst-test202-dev-dir-5'
  ];

  public sort: SortDescriptor[] = [{
    field: 'name',
    dir: 'asc'
  }, 
  {
    field: 'host',
    dir: 'asc'
  }];

  constructor() { }
  
  ngOnInit(): void {
  }
  
  onButtonClick() {
  }

  onSortChange(sort: SortDescriptor[]) {
    this.sort = sort;
    this.gridData = orderBy(hosts, sort);
  }
}
