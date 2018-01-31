import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(
    private dataService : DataService, private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('guuaard');  
    let data = this.dataService.getData();
    
    if(data.some( p => p.stuID == next.params.id))
    {
      return true;
    }
    else
    {
      this.router.navigate(['/','error']);
      return false;
    }
  }
}
