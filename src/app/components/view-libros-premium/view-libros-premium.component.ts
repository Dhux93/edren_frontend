import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { views } from 'src/app/models/views';
import { ViewsService } from 'src/app/services/views.service';

@Component({
  selector: 'app-view-libros-premium',
  templateUrl: './view-libros-premium.component.html',
  styleUrls: ['./view-libros-premium.component.css']
})
export class ViewLibrosPremiumComponent implements OnInit,OnDestroy {

  
  private destroy$ = new Subject<any>();
  views: views[]=[];

  constructor(private viewSvc: ViewsService) { }

  ngOnInit(): void {
    this.viewSvc.getAllLibrosPremium()
    .pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.views = data;
    });
  }


  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
  }
}
