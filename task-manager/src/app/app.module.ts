import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// для директив *ngFor/*ngIf, CommonModule вже входить у BrowserModule
// для графіків (версія ng2‑charts@8.x)
import { BaseChartDirective } from 'ng2-charts';

import { AppComponent }      from './app.component';
import { LoginComponent }    from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { NavbarComponent }   from './shared/navbar.component';
import { SidebarComponent }  from './shared/sidebar.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskFormComponent } from './tasks/task-form.component';
import { ChartsComponent }   from './charts/charts.component';
import { ProjectListComponent } from './projects/project-list.component';
import { WelcomeComponent }     from './welcome/welcome.component';
import { UserManagementComponent } from './admin/user-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,
    TaskListComponent,
    TaskFormComponent,
    ChartsComponent,
    ProjectListComponent,
    WelcomeComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BaseChartDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
