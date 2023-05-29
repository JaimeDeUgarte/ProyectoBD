import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/servicio/user-service.service'; 

@Component({
  selector: 'app-admin-tickets',
  templateUrl: './admin-tickets.component.html',
  styleUrls: ['./admin-tickets.component.css']
})
export class AdminTicketsComponent implements OnInit {
  events: any[] = [];  // Arreglo para almacenar los eventos
  miFormulario: FormGroup;  // Instancia del formulario reactivo

  constructor(private userService: UserService) {
    // Inicialización del formulario reactivo con los controles necesarios
    this.miFormulario = new FormGroup({
      id_event: new FormControl(),
      precio: new FormControl(),
      tipo: new FormControl()
    });
  }

  ngOnInit(): void {
    // Método del ciclo de vida OnInit, se ejecuta al inicializar el componente
    // Se obtienen los eventos del servicio UserService y se asignan al arreglo events
    this.userService.getEvents().subscribe((data: any[]) => {
      this.events = data;
    });
  }

  showTicketForm(event: any): void {
    // Método para mostrar u ocultar el formulario de creación de ticket para un evento específico
    event.showForm = !event.showForm;
  }

  createTicket(event: any): void {
    // Método para crear un ticket para un evento específico

    // Se obtienen los valores del formulario reactivo
    const id_event = event.cod_E;
    const precio = this.miFormulario.get('precio')?.value;
    const tipo = this.miFormulario.get('tipo')?.value;

    // Se crea un objeto con los datos del ticket a enviar al servicio UserService
    const pro = {
      id_event: id_event,
      precio: precio,
      tipo: tipo,
      disponible: true
    };

    // Se llama al método del servicio UserService para crear el ticket
    this.userService.createTicket(pro).subscribe(data => {
      alert('Ticket registrado!');
    });

    // Se oculta el formulario de creación de ticket
    event.showForm = false;
  }
}
