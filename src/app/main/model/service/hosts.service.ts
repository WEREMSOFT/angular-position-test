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
  private grids$: Subject<string[]>;
  private skip = 0;
  private count = 10;

  constructor() {
    this.hosts$ = new BehaviorSubject<GridDataResult>(this.getCurrentSortedPage());
    this.grids$ = new BehaviorSubject<string[]>(this.getAvailableGridMapFromHosts());
  }

  getHosts(): Observable<GridDataResult> {
    return this.hosts$;
  }

  getAvailableGrids(): Observable<string[]> {
    return this.grids$;
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
    hosts = hosts.filter(h => !this.hosts.find(host => host.grid === h.grid && host.host === h.host));

    this.hosts = this.hosts.concat(hosts);
    this.emitCurrentSortedPage();
    this.emitCurrentAvailableGridsFromHosts();
  }

  deleteHosts(hosts: Host[]): void {

    hosts.forEach(hostToDelete => {
      this.hosts = this.hosts.filter(host => hostToDelete.grid !== host.grid || hostToDelete.host !== host.host);
    });

    this.emitCurrentSortedPage();
    this.emitCurrentAvailableGridsFromHosts();
  }

  private emitCurrentSortedPage() {
    this.hosts$.next(this.getCurrentSortedPage());
  }

  private emitCurrentAvailableGridsFromHosts() {
    this.grids$.next(this.getAvailableGridMapFromHosts());
  }

  private getCurrentSortedPage(): GridDataResult {
    const returnValue: GridDataResult = { data: this.hosts.slice(this.skip, this.skip + this.count), total: this.hosts.length };
    return returnValue;
  }

  private getAvailableGridMapFromHosts(): string[] {
    const availableGridsMap: Map<string, boolean> = new Map<string, boolean>();
    this.hosts.forEach(host => availableGridsMap[host.grid] = true);
    return Object.keys(availableGridsMap);
  }
}
