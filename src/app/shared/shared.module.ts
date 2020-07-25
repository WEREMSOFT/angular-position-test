import { NgModule } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  declarations: [],
  imports: [
    ButtonsModule,
    GridModule,
    LayoutModule
  ],
  exports: [
    ButtonsModule,
    GridModule,
    LayoutModule
  ]
})

export class SharedModule { }
