import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraResumenComponent } from './muestra-resumen.component';

describe('MuestraResumenComponent', () => {
  let component: MuestraResumenComponent;
  let fixture: ComponentFixture<MuestraResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
