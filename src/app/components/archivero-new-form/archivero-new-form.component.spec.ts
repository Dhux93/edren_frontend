import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveroNewFormComponent } from './archivero-new-form.component';

describe('ArchiveroNewFormComponent', () => {
  let component: ArchiveroNewFormComponent;
  let fixture: ComponentFixture<ArchiveroNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveroNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveroNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
