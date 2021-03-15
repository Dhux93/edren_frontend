import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, UserTable } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  
  constructor(private http: HttpClient) { }

  getAll():Observable<UserTable[]>{
    return this.http
    .get<UserTable[]>(`${environment.apiUrl}/users`)
    .pipe(catchError(this.handlerError));
  }

  
  getById(userId: number):Observable<UserTable>{
    return this.http
    .get<UserTable>(`${environment.apiUrl}/users/${userId}`)
    .pipe(catchError(this.handlerError));
  }

  new(user:User):Observable<User | void>{
    return this.http
    .post<User>(`${environment.apiUrl}/users`,user)
    .pipe(catchError(this.handlerError));
  }

  update(userId:number,user:User):Observable<any>{
    return this.http.patch<User>(`${environment.apiUrl}/users/${userId}`,user)
    .pipe(catchError(this.handlerError));
  }

  delete(userId:number):Observable<{}>{
    return this.http.delete<User>(`${environment.apiUrl}/users/${userId}`)
    .pipe(catchError(this.handlerError));
  }

  handlerError(error:Error): Observable<never>{
    let errorMessage= 'Error unknown';
    if(error){
      errorMessage=`Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
