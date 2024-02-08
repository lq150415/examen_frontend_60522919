import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModalComponent } from './crear-modal.component';

describe('CrearModalComponent', () => {
  let component: CrearModalComponent;
  let fixture: ComponentFixture<CrearModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearModalComponent]
    });
    fixture = TestBed.createComponent(CrearModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
