import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVideosFreeComponent } from './view-videos-free.component';

describe('ViewVideosFreeComponent', () => {
  let component: ViewVideosFreeComponent;
  let fixture: ComponentFixture<ViewVideosFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVideosFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVideosFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
