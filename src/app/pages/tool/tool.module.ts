import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolComponent } from './tool.component';
import { RouterModule } from '@angular/router';
import { toolRoutes } from './tool.routes';
@NgModule({
  declarations: [
    ToolComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(toolRoutes)
  ]
})
export class ToolModule { }
