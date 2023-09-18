import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoContableComponent } from './periodo-contable.component';

describe('PeriodoContableComponent', () => {
  let component: PeriodoContableComponent;
  let fixture: ComponentFixture<PeriodoContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodoContableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
