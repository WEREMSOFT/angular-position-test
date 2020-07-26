import { Injectable } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';
import { mainModule } from 'process';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Host, HOSTS } from '../hosts';

@Injectable({
  providedIn: mainModule
})
export class HostsService {

  private hosts = [...HOSTS];
  private hosts$: Subject<GridDataResult>;
  private skip = 0;
  private count = 10;

  constructor() {
    this.hosts$ = new BehaviorSubject<GridDataResult>(this.getCurrentSortedPage());
  }

  getHosts(): Observable<GridDataResult> {
    return this.hosts$;
  }

  setPage(skip: number, count = 10): void {
    this.skip = skip;
    this.count = count;
    this.emitCurrentSortedPage();
  }

  setSort(sort: SortDescriptor[]) {
    this.hosts = orderBy(this.hosts, sort);
    this.emitCurrentSortedPage();
  }

  addHosts(hosts: Host[]): void {
    this.hosts = this.hosts.concat(hosts);
    this.emitCurrentSortedPage();
  }

  private emitCurrentSortedPage() {
    this.hosts$.next(this.getCurrentSortedPage());
  }

  private getCurrentSortedPage(): GridDataResult {
    const returnValue: GridDataResult = { data: this.hosts.slice(this.skip, this.skip + this.count), total: this.hosts.length };
    return returnValue;
  }
}
