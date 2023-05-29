import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { SignUpComponent } from './paginas/sign-up/sign-up.component';
import { HomeComponent } from './paginas/home/home.component';
import { HUserComponent } from './paginas/huser/huser.component';
import { HAdminComponent } from './paginas/hadmin/hadmin.component';
import { MadminsComponent } from './paginas/madmins/madmins.component';
import { UserComponent } from './paginas/user/user.component';
import { CreateEventComponent } from './paginas/create-event/create-event.component';
import { AdminTicketsComponent } from './paginas/admin-tickets/admin-tickets.component';
import { CreateDatosUsuarioComponent } from './paginas/create-datos-usuario/create-datos-usuario.component';
import { HomeUsuariosComponent } from './paginas/home-usuarios/home-usuarios.component';
import { EventosUsuariosComponent } from './paginas/eventos-usuarios/eventos-usuarios.component';
import { EntradasUsuariosComponent } from './paginas/entradas-usuarios/entradas-usuarios.component';
import { ChangeinfoComponent } from './paginas/changeinfo/changeinfo.component';

const routes: Routes = [
  // Ruta vacía, redirige a la ruta 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Ruta para la página de inicio de sesión
  { path: 'login', component: LoginComponent },
  // Ruta para la página de registro
  { path: 'signup', component: SignUpComponent },
  // Ruta para la página de inicio
  { path: 'home', component: HomeComponent },
  // Ruta para la página de usuario
  {
    path: 'user/:id',
    component: HUserComponent,
    children: [
      // Ruta para la página de inicio de usuarios
      {
        path: 'home/:id',
        component: HomeUsuariosComponent,
      },
      // Ruta para la página de eventos de usuarios
      {
        path: 'events/:id',
        component: EventosUsuariosComponent,
      },
      // Ruta para la página de entradas de usuarios
      {
        path: 'tickets/:id',
        component: EntradasUsuariosComponent,
      },
      // Ruta para la página de cambio de información de usuarios
      {
        path: 'info/:id',
        component: ChangeinfoComponent,
      }
    ]
  },
  // Ruta para la página de creación de datos de usuario
  {
    path: 'user/:id/cdata',
    component: CreateDatosUsuarioComponent
  },
  // Ruta para la página de administrador
  {
    path: 'admin',
    component: HAdminComponent,
    children: [
      // Ruta para la página de administración de administradores
      {
        path: 'madmins',
        component: MadminsComponent
      },
      // Ruta para la página de administración de usuarios
      {
        path: 'user',
        component: UserComponent
      },
      // Ruta para la página de creación de eventos
      {
        path: 'cevent',
        component: CreateEventComponent
      },
      // Ruta para la página de administración de entradas
      {
        path: 'tickets',
        component: AdminTicketsComponent
      }
    ]
  },
  // Ruta para cualquier otra ruta no definida, redirige a la ruta 'home'
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }