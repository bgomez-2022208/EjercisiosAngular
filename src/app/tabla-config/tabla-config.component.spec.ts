import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConfigComponent } from './tabla-config.component';

describe('TablaConfigComponent', () => {
  let component: TablaConfigComponent;
  let fixture: ComponentFixture<TablaConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TablaConfigComponent]
    });
    fixture = TestBed.createComponent(TablaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
