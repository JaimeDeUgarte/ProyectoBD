import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasUsuariosComponent } from './entradas-usuarios.component';

describe('EntradasUsuariosComponent', () => {
  let component: EntradasUsuariosComponent; // Declaración de la variable para el componente
  let fixture: ComponentFixture<EntradasUsuariosComponent>; // Declaración de la variable para el componente fixture

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasUsuariosComponent ] // Declaración de los componentes utilizados en el test
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradasUsuariosComponent); // Creación del componente fixture
    component = fixture.componentInstance; // Asignación del componente al objeto component
    fixture.detectChanges(); // Detectar cambios en el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verificar que el componente se haya creado exitosamente
  });
});
