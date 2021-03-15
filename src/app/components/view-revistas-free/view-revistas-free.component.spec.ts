import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRevistasFreeComponent } from './view-revistas-free.component';

describe('ViewRevistasFreeComponent', () => {
  let component: ViewRevistasFreeComponent;
  let fixture: ComponentFixture<ViewRevistasFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRevistasFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRevistasFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
