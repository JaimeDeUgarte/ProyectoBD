import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUserComponent } from './huser.component';

describe('HUserComponent', () => {
  let component: HUserComponent;
  let fixture: ComponentFixture<HUserComponent>;

  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [ HUserComponent ] // Componente que se va a probar
    })
    .compileComponents(); // Compila los componentes del módulo de pruebas

    // Creación de la instancia del componente y su fixture
    fixture = TestBed.createComponent(HUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Realiza la detección de cambios en el componente
  });

  // Prueba unitaria
  it('should create', () => {
    // Comprobación de que el componente se haya creado exitosamente
    expect(component).toBeTruthy();
  });
});
