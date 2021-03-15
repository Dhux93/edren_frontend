import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AutoresService } from 'src/app/services/autores.service';

@Component({
  selector: 'app-autor-new-form',
  templateUrl: './autor-new-form.component.html',
  styleUrls: ['./autor-new-form.component.css']
})
export class AutorNewFormComponent implements OnInit,OnDestroy {

  private destroy$ = new Subject<any>();
  private isValidEmail = /\S+@\S+\.\S+/;
  errorMessage = null;

  newAutorForm = this.fb.group({
    autor: ['',[Validators.required]],
    face: [''],
    whatt:[''],
    email:['',[Validators.pattern(this.isValidEmail)]]
  });

  
  constructor(private apiAutor:AutoresService,private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
    
  }

  onRegister():void{
    const formValue = this.newAutorForm.value;
   
      this.apiAutor.new(formValue)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res) => {
          if(res){
            this.cleanForm();
            this.router.navigate(['/autores']);
          }
        });
  }

  checkField(field: string):any{

  }

  cleanForm():void{
    this.newAutorForm.get('autor')?.setValue('');
    this.newAutorForm.get('face')?.setValue('');
    this.newAutorForm.get('whatt')?.setValue('');
    this.newAutorForm.get('email')?.setValue('');
  }



}
