import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic.component';
import { routesDynamic } from './dynamic.routes';
import { RouterModule } from '@angular/router';
import { PathModule } from './../../shared/components/path/path.module';
@NgModule({
  declarations: [
    DynamicComponent
    // PathComponent
  ],
  imports: [
    CommonModule,
    PathModule,
    RouterModule.forChild(routesDynamic)
  ]
})
export class DynamicModule { }
