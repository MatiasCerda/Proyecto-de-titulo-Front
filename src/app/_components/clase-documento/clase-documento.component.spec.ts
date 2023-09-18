import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseDocumentoComponent } from './clase-documento.component';

describe('ClaseDocumentoComponent', () => {
  let component: ClaseDocumentoComponent;
  let fixture: ComponentFixture<ClaseDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaseDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
