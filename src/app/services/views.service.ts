import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { views } from '../models/views';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  constructor(private http:HttpClient) { }

  getAll():Observable<views[]>{
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll`)
    .pipe(catchError(this.handlerError));
  }

  getAllLibrosFree():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/libros/free`)
    .pipe(catchError(this.handlerError));
  }

  getAllLibrosPremium():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/libros/premium`)
    .pipe(catchError(this.handlerError));
  }

  getAllRevistasFree():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/revistas/free`)
    .pipe(catchError(this.handlerError));
  }

  getAllRevistasPremium():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/revistas/premium`)
    .pipe(catchError(this.handlerError));
  }

  
  getAllComicsFree():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/comics/free`)
    .pipe(catchError(this.handlerError));
  }

  getAllComicsPremium():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/comics/premium`)
    .pipe(catchError(this.handlerError));
  }

  getAllMusicaFree():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/musica/free`)
    .pipe(catchError(this.handlerError));
  }

  getAllMusicaPremium():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/musica/premium`)
    .pipe(catchError(this.handlerError));
  }

  getAllPeliculasFree():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/peliculas/free`)
    .pipe(catchError(this.handlerError));
  }
  
  getAllPeliculasPremium():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/peliculas/premium`)
    .pipe(catchError(this.handlerError));
  }

  getAllVideosFree():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/videos/free`)
    .pipe(catchError(this.handlerError));
  }

  getAllVideosPremium():Observable<views[]> {
    return this.http
    .get<views[]>(`${environment.apiUrl}/viewAll/videos/premium`)
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
