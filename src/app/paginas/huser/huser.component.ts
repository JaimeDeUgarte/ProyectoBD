import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/servicio/user-service.service'; 

@Component({
  selector: 'app-huser',
  templateUrl: './huser.component.html',
  styleUrls: ['./huser.component.css']
})
export class HUserComponent {
  userId?: string; // ID del usuario
  userinfo: any[] = []; // Información del usuario

  constructor(
    private route: ActivatedRoute, // Proveedor para acceder a los parámetros de la URL
    private router: Router, // Proveedor para la navegación entre rutas
    private userService: UserService // Servicio para obtener información del usuario
  ) {}

  ngOnInit() {
    // Suscripción a los cambios en los parámetros de la URL
    this.route.params.subscribe(params => {
      this.userId = params['id']; // Obtén el ID del usuario de la URL y guárdalo en la variable userId
    });
  }
}
