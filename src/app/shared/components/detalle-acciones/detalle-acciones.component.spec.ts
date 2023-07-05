import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAccionesComponent } from './detalle-acciones.component';

describe('DetalleAccionesComponent', () => {
  let component: DetalleAccionesComponent;
  let fixture: ComponentFixture<DetalleAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
