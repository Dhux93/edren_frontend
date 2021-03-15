import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Image, ImageTable } from '../models/image';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getAll():Observable<ImageTable[]>{
    return this.http
    .get<ImageTable[]>(`${environment.apiUrl}/images`)
    .pipe(catchError(this.handlerError));
  }

  
  getById(id: number):Observable<ImageTable>{
    return this.http
    .get<ImageTable>(`${environment.apiUrl}/images/${id}`)
    .pipe(catchError(this.handlerError));
  }

  new(archId:string,Portada:File){
    const fd = new FormData();
    fd.append('archId',archId);
    fd.append('Portada',Portada);
    return this.http
    .post(`${environment.apiUrl}/images`,fd)
    .pipe(catchError(this.handlerError));
  }

  update(id:number,image:Image):Observable<any>{
    return this.http.patch<Image>(`${environment.apiUrl}/images/${id}`,image)
    .pipe(catchError(this.handlerError));
  }

  delete(id:number):Observable<{}>{
    return this.http.delete<Image>(`${environment.apiUrl}/images/${id}`)
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
