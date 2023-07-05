import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorPoaComponent } from './indicador-poa.component';

describe('IndicadorPoaComponent', () => {
  let component: IndicadorPoaComponent;
  let fixture: ComponentFixture<IndicadorPoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorPoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadorPoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
