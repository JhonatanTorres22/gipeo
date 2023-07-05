import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleObjetivoComponent } from './detalle-objetivo.component';

describe('DetalleObjetivoComponent', () => {
  let component: DetalleObjetivoComponent;
  let fixture: ComponentFixture<DetalleObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleObjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
