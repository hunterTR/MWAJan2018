import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
  <p>
  PROFILE
  </p>

  <p>Name: {{profile.name}}</p>
  <p>Student ID: {{profile.stuID}}</p>
  <p>Email: {{profile.email}}</p>

  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  constructor(private dataService: DataService, private route:ActivatedRoute) { 

  }

  ngOnInit() {
    let data = this.dataService.getData();
    this.route.params.subscribe((params)=> {
       this.profile = data.find(p => p.stuID == params['id']);
       console.log(this.profile);
    })
    
  }

}
