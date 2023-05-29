import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MadminsComponent } from './madmins.component';

// Importa las clases necesarias para las pruebas unitarias

describe('MadminsComponent', () => {
  let component: MadminsComponent;
  let fixture: ComponentFixture<MadminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadminsComponent ] // Declara el componente que se va a probar
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadminsComponent); // Crea una instancia del componente
    component = fixture.componentInstance; // Obtiene la instancia del componente para usar en las pruebas
    fixture.detectChanges(); // Detecta los cambios y actualiza la vista del componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica si el componente existe y es "verdadero" (no nulo ni indefinido)
  });
});
