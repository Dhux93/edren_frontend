import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AutorTable } from 'src/app/models/autor';
import { AutoresService } from 'src/app/services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit,OnDestroy {

  private destroy$ = new Subject<any>();
  autores: AutorTable[]=[];


  constructor(private apiAutor:AutoresService,private router:Router) { }
  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.updateTable();
  }

  public updateTable(): void {
    this.apiAutor.getAll()
    .pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.autores = data;
    });
  }

  onNew(): void {
    this.router.navigate(['/autorNew']);
  }

  onEdit(id: number): void {
    this.router.navigate(['autorEdit',id]);
  }

  onDelete(id: number):void{
    if(window.confirm('Do you really want remove user')){
      this.apiAutor.delete(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (res) {
          window.alert('Eliminado con Exito!');
        }
      });
    }
  }



}
