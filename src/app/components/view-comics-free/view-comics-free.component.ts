import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { views } from 'src/app/models/views';
import { ViewsService } from 'src/app/services/views.service';

@Component({
  selector: 'app-view-comics-free',
  templateUrl: './view-comics-free.component.html',
  styleUrls: ['./view-comics-free.component.css']
})
export class ViewComicsFreeComponent implements OnInit,OnDestroy {

  private destroy$ = new Subject<any>();
  views: views[]=[];


  constructor(private viewSvc: ViewsService) { }

  ngOnInit(): void {
    this.viewSvc.getAllComicsFree()
    .pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.views = data;
    });
  }

  
  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete();
  }

}
