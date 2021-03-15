import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ArchiveroTable } from 'src/app/models/archivero';
import { ImageTable } from 'src/app/models/image';
import { views } from 'src/app/models/views';
import { ArchiverosService } from 'src/app/services/archiveros.service';
import { ImagesService } from 'src/app/services/images.service';
import { ViewsService } from 'src/app/services/views.service';

@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.css']
})
export class PdfsComponent implements OnInit,OnDestroy {

  private destroy$ = new Subject<any>();

  
  images: views[]=[];
  
  constructor(private apiArchiveros:ArchiverosService,private imageSvc: ViewsService,private router:Router) { }

  ngOnInit(): void {
    this.cargarImages();   
  }

  



  cargarImages():void{
    this.imageSvc.getAll()
    .pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.images = data;
    });
  }


  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
  }

  onNew(): void {
    this.router.navigate(['/newPdf']);
  }
}
