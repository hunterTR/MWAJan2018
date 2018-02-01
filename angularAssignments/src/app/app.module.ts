import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MycolorDirective } from './mycolor.directive';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import { DataService } from './data.service';
import { ProfileGuard } from './profile.guard';
import { ErrorComponent } from './error/error.component';
import { MyformComponent } from './myform/myform.component';
import {HttpClientModule} from '@angular/common/http'


const ROUTES : Route[] = [
    {path: '', redirectTo: 'home' , pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'profile/:id',component: ProfileComponent , canActivate:[ProfileGuard]},
    {path: 'error',component:ErrorComponent},
    {path: 'myform',component: MyformComponent},
    {path: '**' , redirectTo: 'home'}

];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UpperDirective,
    MyvisibilityDirective,
    MycolorDirective,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent,
    MyformComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(ROUTES),ReactiveFormsModule,HttpClientModule
  ],
  providers: [DataService , ProfileGuard , FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
