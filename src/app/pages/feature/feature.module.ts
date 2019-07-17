import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { RouterModule } from '@angular/router';
import { routesFeature } from './feature.routes';
@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesFeature)
  ]
})
export class FeatureModule { }
