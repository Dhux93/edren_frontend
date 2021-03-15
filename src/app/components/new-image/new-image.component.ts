import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ArchiveroTable } from 'src/app/models/archivero';
import { ArchiverosService } from 'src/app/services/archiveros.service';
import { ImagesService } from 'src/app/services/images.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-new-image',
  templateUrl: './new-image.component.html',
  styleUrls: ['./new-image.component.css']
})
export class NewImageComponent implements OnInit, OnDestroy {



  file!: File;
  private destroy$ = new Subject<any>();
  portadaSelected!: string | ArrayBuffer | null;
  archiveros: ArchiveroTable[] = [];

 
  constructor(private apiArchiveros: ArchiverosService,private imageSvc: ImagesService, private router: Router) {

  }

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


  uploadImage(archId: HTMLSelectElement){
    this.imageSvc.new(archId.value,this.file)
    .pipe(takeUntil(this.destroy$)).subscribe( res => console.log(res), err => console.log);
  }

  onPortadaSelected(event: any ): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //image preview
      const reader = new FileReader();
      reader.onload = e => this.portadaSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }


  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
  }

}
