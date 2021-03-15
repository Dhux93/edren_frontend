import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { views } from 'src/app/models/views';
import { ViewsService } from 'src/app/services/views.service';

@Component({
  selector: 'app-view-peliculas-premium',
  templateUrl: './view-peliculas-premium.component.html',
  styleUrls: ['./view-peliculas-premium.component.css']
})
export class ViewPeliculasPremiumComponent implements OnInit,OnDestroy {

  private destroy$ = new Subject<any>();
  views: views[]=[];
  constructor(private viewSvc: ViewsService) { }
  ngOnInit(): void {
    this.viewSvc.getAllPeliculasPremium()
    .pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.views = data;
    });
  }

  
  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
  }

}
