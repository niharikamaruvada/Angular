import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'}, //default route

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },

  { path: '**', redirectTo: '/login'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
