// Importa las clases ComponentFixture y TestBed desde el módulo de pruebas de Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa el componente CreateDatosUsuarioComponent desde el archivo './create-datos-usuario.component'
import { CreateDatosUsuarioComponent } from './create-datos-usuario.component';

// Describe un conjunto de pruebas para el componente CreateDatosUsuarioComponent
describe('CreateDatosUsuarioComponent', () => {
  let component: CreateDatosUsuarioComponent;
  let fixture: ComponentFixture<CreateDatosUsuarioComponent>;

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configura el entorno de pruebas con TestBed.configureTestingModule
    await TestBed.configureTestingModule({
      declarations: [ CreateDatosUsuarioComponent ] // Declara el componente a probar
    })
    .compileComponents(); // Compila los componentes declarados

    // Crea una instancia del componente y su fixture asociada
    fixture = TestBed.createComponent(CreateDatosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  // Prueba: debe crear el componente
  it('should create', () => {
    expect(component).toBeTruthy(); // Comprueba que el componente se haya creado correctamente
  });
});
