import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-user-new-form',
  templateUrl: './user-new-form.component.html',
  styleUrls: ['./user-new-form.component.css']
})
export class UserNewFormComponent implements OnInit,OnDestroy {

  private isValidEmail = /\S+@\S+\.\S+/;
  errorMessage = null;
  newUserForm = this.fb.group({
    pais: ['',[Validators.required]],
    idioma: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    usuario: ['',[Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    role: ['',[Validators.required]],
  });
  
  private subcription: Subscription = new Subscription();

  constructor(private apiUser:UsersService,private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
    
  }

  onRegister(): void {
    const formValue = this.newUserForm.value;
    this.subcription.add(
    this.apiUser.new(formValue)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['/users']);
          this.cleanForm();
        }
      }));
  }

  checkField(field:string): any{
    
  }
  
  cleanForm():void{
    this.newUserForm.get('pais')?.setValue('');
    this.newUserForm.get('idioma')?.setValue('');
    this.newUserForm.get('email')?.setValue('');
    this.newUserForm.get('usuario')?.setValue('');
    this.newUserForm.get('password')?.setValue('');
    this.newUserForm.get('role')?.setValue('');
  }
}
