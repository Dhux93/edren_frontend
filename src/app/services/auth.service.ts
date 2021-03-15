import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles,User,UserLogin,UserResponse } from '../models/user';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map} from 'rxjs/operators';
import { JwtHelperService} from '@auth0/angular-jwt'
import { Router } from '@angular/router';


const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  asignRole:Roles = 'any';



  private role = new BehaviorSubject<Roles>(this.asignRole);
private loggedIn = new BehaviorSubject<boolean>(false);
private userToken = new BehaviorSubject<string>('');

  constructor(private http: HttpClient,private router: Router) { 
    this.checkToken();
  }
  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

 get isAdmin$(): Observable<string>{
   this.asignRole=<Roles>localStorage.getItem('role');
    return this.role.asObservable();
   }
  get userTokenValue(): string{
     return this.userToken.getValue();
 }



register(authData:User):Observable<UserResponse | void>{
  return this.http
  .post<UserResponse>(`${environment.apiUrl}/auth/register`,authData)
  .pipe(
    map( (user:UserResponse)=>{
      //console.log('Res=>',res);
            //savetoken();
      this.saveLocalStorage(user);
      //this.user.next(user);
       this.loggedIn.next(true);
        this.role.next(user.role);
       this.userToken.next(user.token);
      return user;
    }),
    catchError((err)=>this.handlerError(err))
 );
}





login(authData:UserLogin): Observable<UserResponse | void>{
   return this.http
   .post<UserResponse>(`${environment.apiUrl}/auth/login`,authData)
   .pipe(
      map( (user:UserResponse)=>{
        //console.log('Res=>',res);
              //savetoken();
        this.saveLocalStorage(user);
        //this.user.next(user);
        this.loggedIn.next(true);
        this.role.next(user.role);
         this.userToken.next(user.token);
        return user;
      }),
      catchError((err)=>this.handlerError(err))
   );
}
logout():void{
  localStorage.removeItem('user');
  localStorage.removeItem('auth');
  localStorage.removeItem('role');
  this.loggedIn.next(false);
  this.role.next('user_free');
   this.userToken.next('');
  
  this.router.navigate(['/login']);
}
private checkToken():void{
   let u=  localStorage.getItem('user');
  const user = JSON.parse(<string>u);
  if(user){
      const isExpired = helper.isTokenExpired(user.token);
      if (isExpired) {
     this.logout();
   } else {
  this.loggedIn.next(true);
  this.role.next(user.role);
      this.userToken.next(user.token);
    
  }
}   
}
private saveLocalStorage(user: UserResponse):void{
  const {userId, message, ... rest}=user;
  localStorage.setItem('user',JSON.stringify(rest));
  localStorage.setItem('auth',user.token);
  localStorage.setItem('role',user.role);
}

private handlerError(err:any):Observable<never>{
  let errorMessage = 'AN ERROR OCURRED RETRIVING DATA';
  if(err){
    errorMessage= `Error: code ${err.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

}
