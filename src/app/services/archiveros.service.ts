import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Archivero, ArchiveroTable } from '../models/archivero';

@Injectable({
  providedIn: 'root'
})
export class ArchiverosService {

  constructor(private http:HttpClient) { }

  getAll():Observable<ArchiveroTable[]>{
    return this.http
    .get<ArchiveroTable[]>(`${environment.apiUrl}/archiveros`)
    .pipe(catchError(this.handlerError));
  }

getLibrosFreeAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/libros/free`)
  .pipe(catchError(this.handlerError));
}

getRevistasFreeAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/revistas/free`)
  .pipe(catchError(this.handlerError));
}

getComicsFreeAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/comics/free`)
  .pipe(catchError(this.handlerError));
}

getMusicaFreeAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/musica/free`)
  .pipe(catchError(this.handlerError));
}

getPeliculasFreeAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/peliculas/free`)
  .pipe(catchError(this.handlerError));
}

getVideosFreeAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/videos/free`)
  .pipe(catchError(this.handlerError));
}

getLibrosPremiumAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/libros/premium`)
  .pipe(catchError(this.handlerError));
}

getRevistasPremiumAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/revistas/premium`)
  .pipe(catchError(this.handlerError));
}

getComicsPremiumAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/comics/premium`)
  .pipe(catchError(this.handlerError));
}

getMusicaPremiumAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/musica/premium`)
  .pipe(catchError(this.handlerError));
}

getPeliculasPremiumAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/peliculas/premium`)
  .pipe(catchError(this.handlerError));
}

getVideosPremiumAll():Observable<ArchiveroTable>{
  return this.http
  .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/videos/premium`)
  .pipe(catchError(this.handlerError));
}


  getById(id: number):Observable<ArchiveroTable>{
    return this.http
    .get<ArchiveroTable>(`${environment.apiUrl}/archiveros/${id}`)
    .pipe(catchError(this.handlerError));
  }

  newArchivero(archivero:Archivero):Observable<Archivero | void>{
    return this.http
    .post<Archivero>(`${environment.apiUrl}/archiveros`,archivero)
    .pipe(catchError(this.handlerError));
  }

  update(id:number,archivero:Archivero):Observable<any>{
    return this.http.patch<Archivero>(`${environment.apiUrl}/archiveros/${id}`,archivero)
    .pipe(catchError(this.handlerError));
  }

  delete(id:number):Observable<{}>{
    return this.http.delete<Archivero>(`${environment.apiUrl}/archiveros/${id}`)
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
