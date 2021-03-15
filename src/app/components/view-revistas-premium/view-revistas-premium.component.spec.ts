import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRevistasPremiumComponent } from './view-revistas-premium.component';

describe('ViewRevistasPremiumComponent', () => {
  let component: ViewRevistasPremiumComponent;
  let fixture: ComponentFixture<ViewRevistasPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRevistasPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRevistasPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
