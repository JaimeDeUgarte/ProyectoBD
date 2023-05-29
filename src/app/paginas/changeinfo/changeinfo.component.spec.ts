import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeinfoComponent } from './changeinfo.component';

describe('ChangeinfoComponent', () => {
  let component: ChangeinfoComponent;
  let fixture: ComponentFixture<ChangeinfoComponent>;

  beforeEach(async () => {
    // Configuración de pruebas: se crea un módulo de pruebas y se declara el componente a probar
    await TestBed.configureTestingModule({
      declarations: [ ChangeinfoComponent ]
    })
    .compileComponents();

    // Se crea una instancia del componente y se obtiene una referencia a su fixture
    fixture = TestBed.createComponent(ChangeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Se realiza una prueba para verificar si el componente se crea correctamente
    expect(component).toBeTruthy();
  });
});
