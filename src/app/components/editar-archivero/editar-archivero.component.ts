import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ArchiveroTable } from 'src/app/models/archivero';
import { AutorTable } from 'src/app/models/autor';
import { ArchiverosService } from 'src/app/services/archiveros.service';
import { AutoresService } from 'src/app/services/autores.service';

@Component({
  selector: 'app-editar-archivero',
  templateUrl: './editar-archivero.component.html',
  styleUrls: ['./editar-archivero.component.css']
})
export class EditarArchiveroComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<any>();
  id: number;
  archivero?: ArchiveroTable;
  editArchiveroForm = this.fb.group({
    titulo: ['', [Validators.required]],
    idAutor: ['', [Validators.required]],
    genero: ['', [Validators.required]],
    precio: ['0'],
    modulos: ['', Validators.required],
    roles: ['', Validators.required]
  });


  autores: AutorTable[] = [];

  modulos: string[] = [
    'libros',
    'revistas',
    'comics',
    'musica',
    'peliculas',
    'videos'
  ];

  roles: string[] = [
    'free',
    'premium'
  ]
  constructor(private apiAutor: AutoresService, private activeroute: ActivatedRoute, private router: Router, private apiArchivero: ArchiverosService, private fb: FormBuilder) {
    this.id = parseInt(<string>this.activeroute.snapshot.paramMap.get('id'));

  }



  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.updateAutores();
    this.cargarArchivero();
  }

  updateAutores(): void {
    this.apiAutor.getAll()
      .pipe(takeUntil(this.destroy$)).subscribe((data) => {
        this.autores = data;
      });
  }

  cargarArchivero() {
    this.apiArchivero.getById(this.id)
      .pipe(takeUntil(this.destroy$)).subscribe(data => {
        this.archivero = data;
        this.pathFormData();
      });
  }

  onEdit(): void {
    const formValue = this.editArchiveroForm.value;
    this.apiArchivero.update(this.id, formValue)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        if (res) {
          this.router.navigate(['/archiveros']);
        }
      });
  }

  private pathFormData(): void {
    this.editArchiveroForm.patchValue({
      titulo: this.archivero?.Titulo,
      autores: this.archivero?.Autores,
      genero: this.archivero?.Genero,
      precio: this.archivero?.Precio,
      modulos: this.archivero?.Modulos,
      roles: this.archivero?.Roles
    })
  }

  checkField(field: string):any{

  }


}
