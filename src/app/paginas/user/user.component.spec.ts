import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    // Configuración de pruebas
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ] // Declaración del componente a probar
    })
    .compileComponents(); // Compilación del componente

    fixture = TestBed.createComponent(UserComponent); // Creación del componente
    component = fixture.componentInstance; // Instancia del componente
    fixture.detectChanges(); // Detección de cambios en el componente
  });

  it('should create', () => {
    // Prueba de creación del componente
    expect(component).toBeTruthy(); // Verificar que el componente se haya creado correctamente
  });
});
