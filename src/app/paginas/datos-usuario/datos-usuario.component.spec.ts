import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsuarioComponent } from './datos-usuario.component';

// Definición de la prueba unitaria para el componente DatosUsuarioComponent
describe('DatosUsuarioComponent', () => {
  let component: DatosUsuarioComponent;
  let fixture: ComponentFixture<DatosUsuarioComponent>;

  // Configuración inicial antes de ejecutar la prueba
  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [ DatosUsuarioComponent ] // Declaración del componente a probar
    })
    .compileComponents();

    // Creación de la instancia del componente y el fixture
    fixture = TestBed.createComponent(DatosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Prueba para verificar que el componente se haya creado correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
