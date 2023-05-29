import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importación de módulos y funciones para realizar pruebas

import { CreateEventComponent } from './create-event.component'; // Importación del componente que se va a probar

describe('CreateEventComponent', () => { // Bloque para describir el componente y las pruebas relacionadas
  let component: CreateEventComponent; // Variable para almacenar una instancia del componente
  let fixture: ComponentFixture<CreateEventComponent>; // Variable para almacenar un fixture, que es una envoltura alrededor del componente

  beforeEach(async () => { // Función que se ejecuta antes de cada prueba de forma asíncrona
    await TestBed.configureTestingModule({ // Configuración del entorno de prueba
      declarations: [ CreateEventComponent ] // Declaración del componente a probar
    })
    .compileComponents(); // Compilación de los componentes declarados

    fixture = TestBed.createComponent(CreateEventComponent); // Creación del componente a partir del fixture
    component = fixture.componentInstance; // Asignación del componente al objeto 'component'
    fixture.detectChanges(); // Detección de cambios en el fixture
  });

  it('should create', () => { // Prueba para verificar si el componente se crea correctamente
    expect(component).toBeTruthy(); // Verificación de que el componente existe
  });
});
