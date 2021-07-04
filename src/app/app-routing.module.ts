import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  /* error page*/ 
  { path: '', component: HomeComponent },
  { path: '#', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
