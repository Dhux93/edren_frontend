import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AutorTable } from 'src/app/models/autor';
import { ArchiverosService } from 'src/app/services/archiveros.service';
import { AutoresService } from 'src/app/services/autores.service';

@Component({
  selector: 'app-archivero-new-form',
  templateUrl: './archivero-new-form.component.html',
  styleUrls: ['./archivero-new-form.component.css']
})
export class ArchiveroNewFormComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<any>();
 
  autores: AutorTable[]=[];
  disabled = false;
  ShowFilter= false;
  limitSelection = false;
  selectedAutores: AutorTable[]=[];
  dropdownSettings: IDropdownSettings = {};

  //titulo, idAutor, genero, precio,modulos,roles
  newArchiveroForm = this.fb.group({
      titulo: ['',[Validators.required]],
      autores: [this.selectedAutores,[Validators.required]],
      genero: ['',[Validators.required]],
      precio: ['0'],
      modulos: ['',Validators.required],
      roles: ['',Validators.required]
  });

  modulos: string[] =[
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

  constructor(private apiAutor:AutoresService,private apiArchivero:ArchiverosService,private router: Router,private fb:FormBuilder) { }



  ngOnInit(): void {
    this.updateAutores();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'Autor',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true    }
  };

  onItemSelect(autor:any){
    this.selectedAutores.push(autor);
    console.log('onItemSelect',autor);
  }

  onSelectAll(autores:any){
    this.selectedAutores= autores;
    console.log('onSelectAll',autores);
  }

  onRegister():void{
    const formValue = this.newArchiveroForm.value;
    this.apiArchivero.newArchivero(formValue)
    .pipe(takeUntil(this.destroy$))
    .subscribe((res)=>{
      if(res){
        this.router.navigate(['/archiveros']);
      }
    })
  }

  updateAutores():void {
      this.apiAutor.getAll().subscribe((data) => {
        this.autores = data;
      });
  }


  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
  }
  
  checkField(field: string):any{

  }

}
