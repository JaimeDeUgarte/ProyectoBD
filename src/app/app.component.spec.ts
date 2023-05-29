import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule // Importar el módulo de pruebas para el enrutamiento
      ],
      declarations: [
        AppComponent // Declarar el componente a ser probado
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crear una instancia del componente
    const app = fixture.componentInstance; // Obtener la instancia del componente
    expect(app).toBeTruthy(); // Comprobar que la instancia del componente existe
  });

  it(`should have as title 'TicketMaster'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Crear una instancia del componente
    const app = fixture.componentInstance; // Obtener la instancia del componente
    expect(app.title).toEqual('TicketMaster'); // Comprobar que el título del componente es 'TicketMaster'
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crear una instancia del componente
    fixture.detectChanges(); // Realizar la detección de cambios en el componente
    const compiled = fixture.nativeElement as HTMLElement; // Obtener el elemento nativo del componente
    expect(compiled.querySelector('.content span')?.textContent).toContain('TicketMaster app is running!'); // Comprobar que el elemento renderizado contiene el texto especificado
  });
});
