import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosUsuariosComponent } from './eventos-usuarios.component';

describe('EventosUsuariosComponent', () => {
  let component: EventosUsuariosComponent;
  let fixture: ComponentFixture<EventosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosUsuariosComponent ] // Declaración del componente que se está probando
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosUsuariosComponent); // Creación del componente dentro de un ComponentFixture para realizar pruebas
    component = fixture.componentInstance; // Obtención de la instancia del componente
    fixture.detectChanges(); // Ejecución del ciclo de detección de cambios del componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verificación de que el componente se haya creado correctamente
  });
});
