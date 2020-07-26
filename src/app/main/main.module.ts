import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule, SharedModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HostsService } from './model/service/hosts.service';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    LayoutModule,
    ButtonsModule,
    GridModule,
    InputsModule,
    LabelModule,
    FormsModule,
    DropDownsModule
  ],
  providers: [
    HostsService
  ]
})
export class MainModule { }
