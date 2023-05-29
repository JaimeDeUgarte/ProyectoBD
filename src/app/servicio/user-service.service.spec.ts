import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';

describe('UserServiceService', () => {
  let service: UserServiceService; // Variable para almacenar la instancia del servicio

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuración del módulo de pruebas
    service = TestBed.inject(UserServiceService); // Inyección del servicio en la variable
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Comprobación de que el servicio ha sido creado exitosamente
  });
});
