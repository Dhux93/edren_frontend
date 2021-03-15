import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMusicaFreeComponent } from './view-musica-free.component';

describe('ViewMusicaFreeComponent', () => {
  let component: ViewMusicaFreeComponent;
  let fixture: ComponentFixture<ViewMusicaFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMusicaFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMusicaFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
