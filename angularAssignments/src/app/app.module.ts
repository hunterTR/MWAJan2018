import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MycolorDirective } from './mycolor.directive';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import { DataService } from './data.service';
import {ProfileGuard} from './profile.guard';

const ROUTES : Route[] = [
    {path: '', redirectTo: 'home' , pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'profile/:id',component: ProfileComponent , canActivate:[ProfileGuard]}

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(ROUTES)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }