import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-students',
  template: `
    <ul>
    <li *ngFor = "let student of students"><a [routerLink]="['/','profile',student.stuID]"> {{ student.name }} </a>
    </li>
    </ul>
  `
})
export class StudentsComponent implements OnInit {

  students: any[];
  constructor(private dataService:DataService) {
      this.students = this.dataService.getData();
      console.log(this.students);
   }

  ngOnInit() {
  }

}
