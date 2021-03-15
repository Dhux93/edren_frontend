import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArchiveroComponent } from './editar-archivero.component';

describe('EditarArchiveroComponent', () => {
  let component: EditarArchiveroComponent;
  let fixture: ComponentFixture<EditarArchiveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarArchiveroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarArchiveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
