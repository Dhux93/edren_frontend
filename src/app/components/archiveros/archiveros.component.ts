import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ArchiveroTable } from 'src/app/models/archivero';
import { AutorTable } from 'src/app/models/autor';




import { ArchiverosService } from 'src/app/services/archiveros.service';
import { AutoresService } from 'src/app/services/autores.service';

@Component({
  selector: 'app-archiveros',
  templateUrl: './archiveros.component.html',
  styleUrls: ['./archiveros.component.css']
})
export class ArchiverosComponent implements OnInit,OnDestroy {

  private destroy$ = new Subject<any>();
  
  archiveros: ArchiveroTable[]=[];
  autores: AutorTable[]=[];
  
  constructor(private apiAutor: AutoresService,private apiArchiveros: ArchiverosService,private router: Router) {

   }
 
  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
  }

  ngOnInit(): void {
   this.updateTable();
   console.log(this.archiveros);
  }

updateTable(): void {
    this.apiArchiveros.getAll()
    .pipe(takeUntil(this.destroy$)).subscribe((data) => {
        
        this.archiveros = data;
        
    });
  }

  onNew(): void{
    this.router.navigate(['/archiveroNew']);
  }

  onEdit(id: number):void{
    this.router.navigate(['archiveroEdit',id]);
  }

  onDelete(id:number):void{
    if(window.confirm('Do you really wnat remove archivero')){
      this.apiArchiveros.delete(id)
      .pipe(takeUntil(this.destroy$))
        .subscribe((res) => {
          if (res) {
            window.alert('Eliminado con Exito!');
          }
        });
    }
  }

  

}
