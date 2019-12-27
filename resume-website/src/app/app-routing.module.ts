import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'resume', component:ResumeComponent },
  {path:'projects', component:ProjectsComponent },
  {path:'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
