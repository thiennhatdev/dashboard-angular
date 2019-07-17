import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelComponent } from './level.component';
import { RouterModule } from '@angular/router';
import { levelRoutes } from './level.routes';
@NgModule({
  declarations: [
    LevelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(levelRoutes)
  ]
})
export class LevelModule { }
