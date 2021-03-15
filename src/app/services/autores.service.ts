import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Autor, AutorTable } from '../models/autor';
@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private http: HttpClient) { }

  getAll():Observable<AutorTable[]>{
    return this.http
    .get<AutorTable[]>(`${environment.apiUrl}/autores`)
    .pipe(catchError(this.handlerError));
  }

  
  getById(id: number):Observable<AutorTable>{
    return this.http
    .get<AutorTable>(`${environment.apiUrl}/autores/${id}`)
    .pipe(catchError(this.handlerError));
  }

  new(autor:Autor):Observable<Autor | void>{
    return this.http
    .post<Autor>(`${environment.apiUrl}/autores`,autor)
    .pipe(catchError(this.handlerError));
  }

  update(id:number,autor:Autor):Observable<any>{
    return this.http.patch<Autor>(`${environment.apiUrl}/autores/${id}`,autor)
    .pipe(catchError(this.handlerError));
  }

  delete(id:number):Observable<{}>{
    return this.http.delete<Autor>(`${environment.apiUrl}/autores/${id}`)
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
