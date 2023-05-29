import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUsuariosComponent } from './home-usuarios.component';

// Describe el componente HomeUsuariosComponent y sus pruebas
describe('HomeUsuariosComponent', () => {
  let component: HomeUsuariosComponent;
  let fixture: ComponentFixture<HomeUsuariosComponent>;

  // Configuración antes de cada prueba
  beforeEach(async () => {
    // Configuración del TestBed para el componente
    await TestBed.configureTestingModule({
      declarations: [ HomeUsuariosComponent ]
    })
    .compileComponents();

    // Creación del componente y del fixture
    fixture = TestBed.createComponent(HomeUsuariosComponent);
    component = fixture.componentInstance;

    // Detección de cambios en el fixture
    fixture.detectChanges();
  });

  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    // Verifica si el componente existe
    expect(component).toBeTruthy();
  });
});
