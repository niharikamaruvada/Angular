import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DatasetComponent } from './dataset/dataset.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    ChildComponentComponent,
    DatasetComponent,
    FormComponentComponent,
    HomeComponent,
    AboutComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
