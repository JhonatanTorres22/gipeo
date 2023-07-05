import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoCardComponent } from './objetivo-card.component';

describe('ObjetivoCardComponent', () => {
  let component: ObjetivoCardComponent;
  let fixture: ComponentFixture<ObjetivoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetivoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
