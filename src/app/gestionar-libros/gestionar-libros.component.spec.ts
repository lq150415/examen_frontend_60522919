import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarLibrosComponent } from './gestionar-libros.component';

describe('GestionarLibrosComponent', () => {
  let component: GestionarLibrosComponent;
  let fixture: ComponentFixture<GestionarLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarLibrosComponent]
    });
    fixture = TestBed.createComponent(GestionarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
