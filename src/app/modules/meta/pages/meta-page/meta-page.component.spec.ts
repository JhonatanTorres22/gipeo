import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaPageComponent } from './meta-page.component';

describe('MetaPageComponent', () => {
  let component: MetaPageComponent;
  let fixture: ComponentFixture<MetaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
