import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoMesComponent } from './formato-mes.component';

describe('FormatoMesComponent', () => {
  let component: FormatoMesComponent;
  let fixture: ComponentFixture<FormatoMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormatoMesComponent]
    });
    fixture = TestBed.createComponent(FormatoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
