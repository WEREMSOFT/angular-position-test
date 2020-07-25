import { Component } from '@angular/core';
import { Constants, OTHER_VALUES } from './core/constants';
import { State } from '@progress/kendo-data-query';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { CategoriesService } from './north-wind.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor() {
  }
}
