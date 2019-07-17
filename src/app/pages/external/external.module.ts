import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalComponent } from './external.component';
import { RouterModule } from '@angular/router';
import { externalRoutes } from './external.routes';
@NgModule({
  declarations: [
    ExternalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(externalRoutes)
  ]
})
export class ExternalModule { }
