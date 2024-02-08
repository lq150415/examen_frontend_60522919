import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPrestamosComponent } from './registrar-prestamos.component';

describe('RegistrarPrestamosComponent', () => {
  let component: RegistrarPrestamosComponent;
  let fixture: ComponentFixture<RegistrarPrestamosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPrestamosComponent]
    });
    fixture = TestBed.createComponent(RegistrarPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
