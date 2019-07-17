import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule, NgRedux } from 'ng2-redux';

import {IAppState , rootReducer, INITIAL_STATE} from './store';

// import module
// import { CommonModule } from '@angular/common';
// import { PathModule } from './shared/components/path/path.module';
import { SideBarModule } from './shared/layout/side-bar/side-bar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { FeatureModule } from './pages/feature/feature.module';
import { DynamicModule } from './pages/dynamic/dynamic.module';
import { MailboxModule } from './pages/mailbox/mailbox.module';
import { FormModule } from './pages/form/form.module';
import { TableModule } from './pages/table/table.module';
import { ToolModule } from './pages/tool/tool.module';
import { PageModule } from './pages/page/page.module';
import { CalendarModule } from './pages/calendar/calendar.module';
import { MapModule } from './pages/map/map.module';
import { ChartModule } from './pages/chart/chart.module';
import { LevelModule } from './pages/level/level.module';
import { ExternalModule  } from './pages/external/external.module';
//service
import { MemberService } from './core/service/member/member.service';
import { MenuService } from './core/service/menu.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MemberComponent } from './pages/member/member.component';
import { MemberModule } from './pages/member/member.module';

@NgModule({
  declarations: [
    
    AppComponent
    
  ],
  imports: [
    // PathModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,  
    SideBarModule,
    DashboardModule,
    MemberModule,
    DynamicModule,
    FeatureModule,
    MailboxModule,
    FormModule,
    TableModule,
    ToolModule,
    PageModule,
    CalendarModule, 
    MapModule,
    ChartModule,
    LevelModule,
    ExternalModule,
    NgReduxModule,
    AppRoutingModule
    
  ],
  providers: [
    MenuService,
    MemberService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE );
  }
}
