import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperConfigComponent } from './stepper-config.component';

describe('StepperConfigComponent', () => {
  let component: StepperConfigComponent;
  let fixture: ComponentFixture<StepperConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepperConfigComponent]
    });
    fixture = TestBed.createComponent(StepperConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
