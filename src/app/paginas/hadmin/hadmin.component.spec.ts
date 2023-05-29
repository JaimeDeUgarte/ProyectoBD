import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importar las clases ComponentFixture y TestBed del paquete '@angular/core/testing'

import { HAdminComponent } from './hadmin.component'; // Importar el componente HAdminComponent

describe('HAdminComponent', () => { // Declarar una descripción para la suite de pruebas del componente HAdminComponent
  let component: HAdminComponent; // Declarar una variable para el componente HAdminComponent
  let fixture: ComponentFixture<HAdminComponent>; // Declarar una variable para el objeto ComponentFixture del componente HAdminComponent

  beforeEach(async () => { // Antes de cada prueba asincrónica
    await TestBed.configureTestingModule({
      declarations: [ HAdminComponent ] // Configurar el módulo de pruebas con la declaración del componente HAdminComponent
    })
    .compileComponents(); // Compilar el componente y sus recursos

    fixture = TestBed.createComponent(HAdminComponent); // Crear una instancia del componente HAdminComponent utilizando el objeto TestBed
    component = fixture.componentInstance; // Obtener la instancia del componente HAdminComponent del objeto ComponentFixture
    fixture.detectChanges(); // Detectar cambios en el componente y sus vistas
  });

  it('should create', () => { // Especificar una prueba: debería crear el componente
    expect(component).toBeTruthy(); // Verificar que el componente se haya creado exitosamente
  });
});
