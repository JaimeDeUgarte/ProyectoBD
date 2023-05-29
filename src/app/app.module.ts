import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { SignUpComponent } from './paginas/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './paginas/home/home.component';
import { HUserComponent } from './paginas/huser/huser.component';
import { HAdminComponent } from './paginas/hadmin/hadmin.component';
import { MadminsComponent } from './paginas/madmins/madmins.component';
import { UserComponent } from './paginas/user/user.component';
import { CreateEventComponent } from './paginas/create-event/create-event.component';
import { AdminTicketsComponent } from './paginas/admin-tickets/admin-tickets.component';
import { DatosUsuarioComponent } from './paginas/datos-usuario/datos-usuario.component';
import { CreateDatosUsuarioComponent } from './paginas/create-datos-usuario/create-datos-usuario.component';
import { HomeUsuariosComponent } from './paginas/home-usuarios/home-usuarios.component';
import { EventosUsuariosComponent } from './paginas/eventos-usuarios/eventos-usuarios.component';
import { EntradasUsuariosComponent } from './paginas/entradas-usuarios/entradas-usuarios.component';
import { ChangeinfoComponent } from './paginas/changeinfo/changeinfo.component';

@NgModule({
  declarations: [
    AppComponent, // Componente principal de la aplicación
    LoginComponent, // Componente para iniciar sesión
    SignUpComponent, // Componente para registrarse
    HomeComponent, // Componente para la página principal
    HUserComponent, // Componente para la página de usuarios
    HAdminComponent, // Componente para la página de administradores
    MadminsComponent, // Componente para la gestión de administradores
    UserComponent, // Componente para la gestión de usuarios
    CreateEventComponent, // Componente para crear eventos
    AdminTicketsComponent, // Componente para la gestión de tickets por parte de administradores
    DatosUsuarioComponent, // Componente para ver los datos del usuario
    CreateDatosUsuarioComponent, // Componente para crear datos de usuario
    HomeUsuariosComponent, // Componente para la página de inicio de usuarios
    EventosUsuariosComponent, // Componente para la página de eventos de usuarios
    EntradasUsuariosComponent, // Componente para la página de entradas de usuarios
    ChangeinfoComponent // Componente para cambiar información del usuario
  ],
  imports: [
    BrowserModule, // Módulo para la ejecución de aplicaciones en el navegador
    ReactiveFormsModule, // Módulo para la gestión de formularios reactivos
    FormsModule, // Módulo para la gestión de formularios de plantilla
    HttpClientModule, // Módulo para realizar solicitudes HTTP
    AppRoutingModule // Módulo para el enrutamiento de la aplicación
  ],
  providers: [], // Proveedores de servicios para la inyección de dependencias
  bootstrap: [AppComponent] // Componente raíz para arrancar la aplicación
})
export class AppModule { }
