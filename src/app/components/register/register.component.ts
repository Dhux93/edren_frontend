import { Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { FormBuilder,FormGroup,Validators } from "@angular/forms";




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnDestroy {

  private isValidEmail = /\S+@\S+\.\S+/;
  errorMessage = null;
  RegisterForm = this.fb.group({
    pais: ['',[Validators.required]],
    idioma: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    usuario: ['',[Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    role: ['user_free',[Validators.required]],
  });
  

  private subcription: Subscription = new Subscription();


  constructor(private authSev:AuthService,private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cleanForm();
    
  }

  
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
    
  }


  onRegister(): void {
    const formValue = this.RegisterForm.value;
    this.subcription.add(
    this.authSev.register(formValue)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['/']);
          this.cleanForm();
        }
      }));
  }

  checkField(field:string): any{
    
  }

  cleanForm():void{
    this.RegisterForm.get('pais')?.setValue('');
    this.RegisterForm.get('idioma')?.setValue('');
    this.RegisterForm.get('email')?.setValue('');
    this.RegisterForm.get('usuario')?.setValue('');
    this.RegisterForm.get('password')?.setValue('');
    
  }


 
 
}

