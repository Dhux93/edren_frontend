import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComicsPremiumComponent } from './view-comics-premium.component';

describe('ViewComicsPremiumComponent', () => {
  let component: ViewComicsPremiumComponent;
  let fixture: ComponentFixture<ViewComicsPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComicsPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComicsPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
