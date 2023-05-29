import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketsComponent } from './admin-tickets.component';

describe('AdminTicketsComponent', () => {
  let component: AdminTicketsComponent;
  let fixture: ComponentFixture<AdminTicketsComponent>;

  beforeEach(async () => {
    // Configuración y preparación del entorno de pruebas
    await TestBed.configureTestingModule({
      declarations: [ AdminTicketsComponent ]  // Declaración del componente a probar
    })
    .compileComponents();  // Compilación del componente

    // Creación de la instancia del componente y el fixture
    fixture = TestBed.createComponent(AdminTicketsComponent);
    component = fixture.componentInstance;

    // Detección de cambios iniciales en el componente
    fixture.detectChanges();
  });

  // Prueba: debería crear el componente correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
