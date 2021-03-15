import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  private isValidEmail = /\S+@\S+\.\S+/;
  errorMessage = null;
  private subscription: Subscription = new Subscription();
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder,private authSv: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.cleanForm();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

  onLogin(): void {

    if (this.loginForm.invalid) {
      return;
    }

    const formValue = this.loginForm.value;
    this.subscription.add(
      this.authSv.login(formValue).subscribe(res => {
        if (res) {
          this.router.navigate(['/']);
          this.cleanForm();
        }
      }));


  
  }

  cleanForm():void{
 
    this.loginForm.get('email')?.setValue('');

    this.loginForm.get('password')?.setValue('');
    
  }
  checkField(field: string): any {
   
  }



}
