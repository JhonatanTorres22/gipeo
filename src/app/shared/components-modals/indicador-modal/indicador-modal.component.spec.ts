import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorModalComponent } from './indicador-modal.component';

describe('IndicadorModalComponent', () => {
  let component: IndicadorModalComponent;
  let fixture: ComponentFixture<IndicadorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
