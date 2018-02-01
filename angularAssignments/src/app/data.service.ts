import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(){
    return [{_id:1, name:"Asaad Saad",stuID:'12345',email:'asaad@mum.edu'}];
  }

  getUser(){
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }

  getPostData(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  }

}
