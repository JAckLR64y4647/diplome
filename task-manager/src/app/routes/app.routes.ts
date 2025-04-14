import { Routes } from '@angular/router';
import { UserManagementComponent } from "../admin/user-management.component";
import { LoginComponent } from "../auth/login.component";
import { RegisterComponent } from "../auth/register.component";
import { ChartsComponent } from "../dashboard/charts.component";
import { TaskFormComponent } from "../tasks/task-form.component";
import { TaskListComponent } from "../tasks/task-list.component";

export const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'tasks', component: TaskListComponent },
   { path: 'tasks/new', component: TaskFormComponent },
   { path: 'tasks/edit/:id', component: TaskFormComponent },
   { path: 'dashboard', component: ChartsComponent },
   { path: 'admin', component: UserManagementComponent },
];
