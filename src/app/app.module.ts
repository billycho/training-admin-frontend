import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { UserDetailComponentComponent } from './user-detail-component/user-detail-component.component';
import { FormsModule }   from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { HeroParentComponentComponent } from './hero-parent-component/hero-parent-component.component';
import { HeroChildComponentComponent } from './hero-child-component/hero-child-component.component';

import { UserService } from './UserService';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

const appRoutes: Routes = [
{ path: 'users', component:  UserListComponentComponent  },
  { path: 'users/:id', component:  UserDetailComponentComponent  },
     
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayUserComponent,
    UserListComponentComponent,
    UserDetailComponentComponent,
    HeroParentComponentComponent,
    HeroChildComponentComponent,
    DashboardComponentComponent
  ],
  imports: [
    BrowserModule,  FormsModule,  RouterModule.forRoot(appRoutes), HttpModule,   InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [UserService],
  bootstrap: [DashboardComponentComponent ]
})
export class AppModule { }
