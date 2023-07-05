import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorAccionesComponent } from './indicador-acciones.component';

describe('IndicadorAccionesComponent', () => {
  let component: IndicadorAccionesComponent;
  let fixture: ComponentFixture<IndicadorAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorAccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadorAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
