import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  // Configuración antes de cada prueba
  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ] // Componentes declarados en el módulo de pruebas
    })
    .compileComponents(); // Compila los componentes del módulo de pruebas

    // Creación de la instancia del componente y su fixture
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;

    // Detecta los cambios en el componente
    fixture.detectChanges();
  });

  // Prueba unitaria: el componente debe crearse correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
