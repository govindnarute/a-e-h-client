import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
path:'admin',
component:AdminHomeComponent,
children:[ {
  path: 'login',
  component: LoginComponent,
},

{
  path: 'dashboard',
  component: DashboardComponent,
},
{
  path: 'addUser',
  component: AddUserComponent,
},
{
  path: 'users',
  component: UserListComponent,
},
{
  path: 'addStudent',
  component: AddStudentComponent,
},
{
  path: 'studentList',
  component: StudentListComponent,
},]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
