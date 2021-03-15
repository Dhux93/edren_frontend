import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ArchiveroTable } from 'src/app/models/archivero';
import { ArchiverosService } from 'src/app/services/archiveros.service';
import { PdfsService } from 'src/app/services/pdfs.service';

@Component({
  selector: 'app-new-pdf',
  templateUrl: './new-pdf.component.html',
  styleUrls: ['./new-pdf.component.css']
})
export class NewPdfComponent implements OnInit,OnDestroy {

  file!: File;
  private destroy$ = new Subject<any>();
  archivoSelected!: string | ArrayBuffer | null;
  archiveros: ArchiveroTable[] = [];

  constructor(private apiArchiveros: ArchiverosService,private pdfSvc:PdfsService,private router:Router) { }

  ngOnInit(): void {
    this.cargarArchiveros(); 
  }

  cargarArchiveros(): void {
    this.apiArchiveros.getAll()
      .pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this.archiveros = data;
      });
  }

  checkField(field: string): any {

  }

  onArchivoSelected(event: any): void{
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //image preview
      const reader = new FileReader();
      reader.onload = e => this.archivoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
  }

  upload(archId: HTMLSelectElement,encabezado: HTMLTextAreaElement){
    this.pdfSvc.new(archId.value,encabezado.value,this.file)
    .pipe(takeUntil(this.destroy$)).subscribe( res => console.log(res), err => console.log);
  }



}
