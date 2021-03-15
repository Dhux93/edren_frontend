import { Component, OnDestroy,Output, EventEmitter, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnDestroy {

  private subcription: Subscription = new Subscription();

  isAdmin = '';
  
  
  isLogged = false;
  private destroy$ = new Subject<any>();
  constructor(private authSvc:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.subcription.add(this.authSvc.isLogged.subscribe(res => this.isLogged = res));
   this.authSvc.isAdmin$.pipe(takeUntil(this.destroy$)).subscribe(res => this.isAdmin = res );
    console.log(this.isAdmin);
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
  }
  onLogout(): void {
    this.authSvc.logout();
    
  }

  
  redirectLibros(){
    if(this.isAdmin == 'admin' || this.isAdmin =='user_premium' ){
      this.router.navigate(['/']);
    }else if(this.isAdmin == 'user_free'){
      this.router.navigate(['/viewLibrosFree']);
    }
  }
  
  redirectRevistas(){
   if(this.isAdmin == 'admin' || this.isAdmin =='user_premium' ){
    this.router.navigate(['/viewRevistasPremium']);
    }else if(this.isAdmin == 'user_free'){
      this.router.navigate(['/viewRevistasFree']);
    }
  }
  
  redirectComics(){
    if(this.isAdmin == 'admin' || this.isAdmin =='user_premium' ){
      this.router.navigate(['/viewComicsPremium']);
    }else if(this.isAdmin == 'user_free'){
      this.router.navigate(['/viewComicsFree']);
    }
  }

  redirectMusica(){
    if(this.isAdmin == 'admin' || this.isAdmin =='user_premium' ){
      this.router.navigate(['/viewMusicaPremium']);
    }else if(this.isAdmin == 'user_free'){
      this.router.navigate(['/viewMusicaFree']);
    }
  } 

  redirectPeliculas(){
    if(this.isAdmin == 'admin' || this.isAdmin =='user_premium' ){
      this.router.navigate(['/viewPeliculasPremium']);
    }else if(this.isAdmin == 'user_free'){
      this.router.navigate(['/viewPeliculasFree']);
    }
  }

  redirectVideos(){
    if(this.isAdmin == 'admin' || this.isAdmin =='user_premium' ){
      this.router.navigate(['/viewVideosPremium']);
    }else if(this.isAdmin == 'user_free'){
      this.router.navigate(['/viewVideosFree']);
    }
  }
}
