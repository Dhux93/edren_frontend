import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AutoresService } from 'src/app/services/autores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutorTable } from 'src/app/models/autor';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit,OnDestroy {

  private isValidEmail = /\S+@\S+\.\S+/;

  id: number;
  autor?: AutorTable;
    editAutorForm = this.fb.group({
    autor: ['',[Validators.required]],
    face: [''],
    whatt:[''],
    email:['',[Validators.pattern(this.isValidEmail)]]
  });
  private subcription: Subscription = new Subscription();

  constructor(private activeroute: ActivatedRoute, private router: Router, private apiAutor: AutoresService, private fb: FormBuilder) { 
    this.id = parseInt(<string>this.activeroute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.cargarAutor();
  }

  cargarAutor() {
    this.subcription.add(
      this.apiAutor.getById(this.id)
        .subscribe(data => {
          this.autor = data;
          this.pathFormData();
        }));
  }

  checkField(field: string): any {

  }

  onEdit(): void {
    const formValue = this.editAutorForm.value;
    this.subcription.add(
      this.apiAutor.update(this.id, formValue)
        .subscribe(res => {
          if (res) {
            this.router.navigate(['/autores']);
          }
        }));
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();

  }

  private pathFormData(): void {

    this.editAutorForm.patchValue({
      autor: this.autor?.Autor,
      face: this.autor?.Face,
      whatt: this.autor?.Whatt,
      email: this.autor?.Email,
    })
  }


}
