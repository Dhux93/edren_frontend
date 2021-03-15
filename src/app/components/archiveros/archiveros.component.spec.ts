import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiverosComponent } from './archiveros.component';

describe('ArchiverosComponent', () => {
  let component: ArchiverosComponent;
  let fixture: ComponentFixture<ArchiverosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiverosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiverosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
