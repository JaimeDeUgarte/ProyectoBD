import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ] // Declaración del componente HomeComponent en el módulo de pruebas
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent); // Creación del componente HomeComponent en el fixture de pruebas
    component = fixture.componentInstance; // Obtención de la instancia del componente
    fixture.detectChanges(); // Realización de la detección de cambios en el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Prueba para verificar que el componente se haya creado correctamente
  });
});
