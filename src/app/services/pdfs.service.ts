import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PdfsTable,Pdfs } from '../models/pdf';

@Injectable({
  providedIn: 'root'
})
export class PdfsService {

  constructor(private http: HttpClient) { }

  getAll():Observable<PdfsTable[]>{
    return this.http
    .get<PdfsTable[]>(`${environment.apiUrl}/pdf`)
    .pipe(catchError(this.handlerError));
  }

  
  getById(id: number):Observable<PdfsTable>{
    return this.http
    .get<PdfsTable>(`${environment.apiUrl}/pdf/${id}`)
    .pipe(catchError(this.handlerError));
  }

  new(archId:string,encabezado:string,Archivo:File){
   
    const fd = new FormData();
    fd.append('archId',archId);
    fd.append('Archivo',Archivo);
    fd.append('encabezado',encabezado);
    return this.http
    .post<Pdfs>(`${environment.apiUrl}/pdf`,fd)
    .pipe(catchError(this.handlerError));
  }

  update(id:number,pdf:Pdfs):Observable<any>{
    return this.http.patch<Pdfs>(`${environment.apiUrl}/pdf/${id}`,pdf)
    .pipe(catchError(this.handlerError));
  }

  delete(id:number):Observable<{}>{
    return this.http.delete<Pdfs>(`${environment.apiUrl}/pdf/${id}`)
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
