import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getData(){
    return [{_id:1, name:"Asaad Saad",stuID:'12345',email:'asaad@mum.edu'}];
  }

}
