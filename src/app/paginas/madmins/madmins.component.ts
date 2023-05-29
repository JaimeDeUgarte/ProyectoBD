import { Component } from '@angular/core';
import { UserService } from 'src/app/servicio/user-service.service'; 
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-madmins',
  templateUrl: './madmins.component.html',
  styleUrls: ['./madmins.component.css']
})
export class MadminsComponent {
  usuario: any[] = []; // Variable para almacenar los usuarios
  miFormulario = new FormGroup({
    email: new FormControl(''), // Campo de entrada para el correo electrónico
    password: new FormControl('') // Campo de entrada para la contraseña
  });
  isLoading = false; // Indicador de carga
  isSuccess = false; // Indicador de éxito

  searchQuery: string; // Consulta de búsqueda
  adminUsers: any[]; // Usuarios administradores
  selectedUser: any; // Usuario seleccionado
  password: string; // Contraseña
  email: string; // Correo electrónico
  role: string; // Rol

  constructor(private userService: UserService) {
    this.searchQuery = '';
    this.adminUsers = [];
    this.selectedUser = null;
    this.password = '';
    this.email = '';
    this.role = '';
  }

  onSubmit() {
    this.isLoading = true; // Activa el indicador de carga
    const email = this.miFormulario.value.email; // Obtiene el valor del campo de correo electrónico
    const password = this.miFormulario.value.password; // Obtiene el valor del campo de contraseña
    if (email) {
      this.userService.verifyEmail(email).subscribe(result => {
        if (result.exists) { // Verifica si el correo electrónico ya está registrado
          alert('El email ya está registrado');
        } else {
          const pro = {
            'email': email,
            'password': password,
            'role': 'admin'
          };
          this.userService.createUser(pro).subscribe(data => {
            this.usuario.push(data); // Agrega el usuario a la lista
            setTimeout(() => {
              this.isLoading = false; // Desactiva el indicador de carga
              this.isSuccess = true; // Activa el indicador de éxito
            }, 10000);
          });
        }
      });
    }
  }

}
