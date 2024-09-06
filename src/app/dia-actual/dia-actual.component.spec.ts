import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaActualComponent } from './dia-actual.component';

describe('DiaActualComponent', () => {
  let component: DiaActualComponent;
  let fixture: ComponentFixture<DiaActualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DiaActualComponent]
    });
    fixture = TestBed.createComponent(DiaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
