import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AttendanceComponent } from './features/attendance/attendance.component';
import { ProfileComponent } from './features/profile/profile.component';
import { LeavesComponent } from './features/leaves/leaves.component';
import { RequestsComponent } from './features/requests/requests.component';
import { PayrollComponent } from './features/payroll/payroll.component';
import { DepartmentsComponent } from './features/departments/departments.component';
import { PerformanceComponent } from './features/performance/performance.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './core/auth/login/login.component';

const routes: Routes = [
  // {path:"",component:MainLayoutComponent},
  {
  path: '',
  component: AuthLayoutComponent,
  children: [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
  ]
},
  {path:"Main",component:MainLayoutComponent,children: [
    {path:"Dashboard",component:DashboardComponent},
    {path:"Attendance",component:AttendanceComponent},
    {path:"Profile",component:ProfileComponent},
    {path:"Leaves",component:LeavesComponent},
    {path:"Requests",component:RequestsComponent},
    {path:"Payroll",component:PayrollComponent},
    {path:"Departments",component:DepartmentsComponent},
    {path:"Performance",component: PerformanceComponent},
    {path:"",redirectTo:"Profile",pathMatch:"full"}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
