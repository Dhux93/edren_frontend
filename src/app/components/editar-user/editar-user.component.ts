import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserTable } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit, OnDestroy {

  private isValidEmail = /\S+@\S+\.\S+/;

  id: number;
  usuario?: UserTable;
  constructor(private activeroute: ActivatedRoute, private router: Router, private apiUser: UsersService, private fb: FormBuilder) {
    this.id = parseInt(<string>this.activeroute.snapshot.paramMap.get('id'));

  }


  private subcription: Subscription = new Subscription();



  editUserForm = this.fb.group({
    pais: ['', [Validators.required]],
    idioma: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    usuario: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    role: ['', [Validators.required]],
  });




  ngOnInit(): void {
    this.cargarUsuario();
    this.editUserForm.get('password')?.setValidators(null);
    this.editUserForm.updateValueAndValidity();
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();

  }

  cargarUsuario() {
    this.subcription.add(
      this.apiUser.getById(this.id)
        .subscribe(data => {
          this.usuario = data;
          this.pathFormData();
        }));
  }

  checkField(field: string): any {

  }

  onEdit(): void {
    const formValue = this.editUserForm.value;
    this.subcription.add(
      this.apiUser.update(this.id, formValue)
        .subscribe(res => {
          if (res) {
            this.router.navigate(['/users']);
          }
        }));
  }

  private pathFormData(): void {

    this.editUserForm.patchValue({
      usuario: this.usuario?.Usuario,
      role: this.usuario?.Role,
      pais: this.usuario?.Pais,
      idioma: this.usuario?.Idioma,
      email: this.usuario?.Email,
    })
  }

}
