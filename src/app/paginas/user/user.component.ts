import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicio/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = []; // Array para almacenar usuarios
  selectedUser: any = {}; // Usuario seleccionado
  newUser: any = {}; // Nuevo usuario
  isEditing: boolean = false; // Bandera para indicar si se está editando
  roles: string[] = ['user', 'admin']; // Roles disponibles
  currentUser: any = {}; // Usuario actualmente logueado

  usersAdmin: any[] = []; // Array para almacenar usuarios con rol 'admin'
  usersUser: any[] = []; // Array para almacenar usuarios con rol 'user'

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // Obtener usuarios por rol 'admin'
    this.userService.getUserByRole('admin').subscribe(
      (adminResponse: any) => {
        // Obtener usuarios por rol 'user'
        this.userService.getUserByRole('user').subscribe(
          (userResponse: any) => {
            // Almacenar usuarios en el array users
            this.users = [
              { role: 'users-admin', users: adminResponse },
              { role: 'users-user', users: userResponse }
            ];
          },
          (userError: any) => {
            console.error(userError);
          }
        );
      },
      (adminError: any) => {
        console.error(adminError);
      }
    );
  }

  selectUser(user: any): void {
    // Seleccionar un usuario y guardar su información en selectedUser
    this.selectedUser = { ...user };
    this.isEditing = false;
  }

  deleteUser(user: any): void {
    // Eliminar un usuario
    const confirmDelete = confirm('¿Estás seguro de eliminar este usuario?');
    if (confirmDelete) {
      this.userService.deleteUser(user.id).subscribe(
        () => {
          // Actualizar la lista de usuarios después de eliminar el usuario
          if (user.role === 'admin') {
            this.usersAdmin = this.usersAdmin.filter(u => u.id !== user.id);
          } else {
            this.usersUser = this.usersUser.filter(u => u.id !== user.id);
          }
          alert('Usuario eliminado');
          location.reload(); // Recargar la página
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  saveChanges(): void {
    // Guardar cambios en el usuario seleccionado
    this.userService.updateUser(
      this.selectedUser.id,
      {
        email: this.selectedUser.email,
        password: this.selectedUser.password,
        role: this.selectedUser.role
      }
    ).subscribe(
      () => {
        alert('Usuario modificado');
        window.location.reload();
        this.isEditing = false;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
