import { NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatGridListModule
  ] 
})
export class SharedModule { }