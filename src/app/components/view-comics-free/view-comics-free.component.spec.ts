import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComicsFreeComponent } from './view-comics-free.component';

describe('ViewComicsFreeComponent', () => {
  let component: ViewComicsFreeComponent;
  let fixture: ComponentFixture<ViewComicsFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComicsFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComicsFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
