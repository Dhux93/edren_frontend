import { Injectable } from '@angular/core';
 import { CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
 import { UserResponse } from '../models/user';
import { AuthService } from '../services/auth.service';

 @Injectable({
   providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(private authSvc:AuthService){}
  
  
  
  
canActivate():Observable<boolean> {
     return this.authSvc.isLogged.pipe(
       take(1),
       map((isLogged: boolean)=> !isLogged)
      );
      
//     // return this.authSvc.user$.pipe(
//     //   take(1),
//     //   map((user: UserResponse) => (!user ? true : false))
//     // )
}
  
 }
