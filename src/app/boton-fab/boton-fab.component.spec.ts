import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonFabComponent } from './boton-fab.component';

describe('BotonFabComponent', () => {
  let component: BotonFabComponent;
  let fixture: ComponentFixture<BotonFabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BotonFabComponent]
    });
    fixture = TestBed.createComponent(BotonFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
