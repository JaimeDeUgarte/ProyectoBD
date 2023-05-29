import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicio/user-service.service'; // Importar el servicio UserService
import { ActivatedRoute } from '@angular/router'; // Importar la clase ActivatedRoute
import { Observable } from 'rxjs'; // Importar Observable

@Component({
  selector: 'app-entradas-usuarios',
  templateUrl: './entradas-usuarios.component.html',
  styleUrls: ['./entradas-usuarios.component.css']
})
export class EntradasUsuariosComponent implements OnInit {
  userId: string | null = null; // Variable para almacenar el ID del usuario
  ticketItems: any[] = []; // Arreglo para almacenar los elementos de los boletos
  ticketItems1: any[] = []; // Arreglo adicional para almacenar detalles específicos de los boletos

  constructor(private eventService: UserService, private route: ActivatedRoute) {} // Inyección de dependencias del servicio UserService y la clase ActivatedRoute

  ngOnInit(): void {
    this.route.params.subscribe(params => { // Suscribirse a los cambios de los parámetros de la ruta
      this.userId = params['id']; // Asignar el ID del usuario a la variable userId
      console.log('userId:', this.userId);
      this.loadTicketItems(); // Cargar los elementos de los boletos
    });
  }

  loadTicketItems(): void {
    if (this.userId) {
      this.eventService.getTicket_user(this.userId).subscribe(
        (response) => {
          const ticketIDs = response.map((item: any) => item.ticketID.toString());
          console.log('ticketIDs:', ticketIDs);
          this.loadTickets(ticketIDs); // Cargar los detalles de los boletos utilizando los IDs obtenidos
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  loadTickets(ticketIDs: string[]): void {
    const idEventString = ticketIDs.join(',');
    this.eventService.getTicketID(idEventString).subscribe(
      (response) => {
        const events = response as any[]; // Convertir la respuesta en un arreglo de tipo 'any'
        for (const event of events) {
          const id_event = event.id_event;
          const precio = event.precio;
          const tipo = event.tipo;
          console.log('precio:', precio);
          console.log('tipo:', tipo);
          console.log('id_event:', id_event);

          const eventDetails = {
            id_event: id_event,
            precio: precio,
            tipo: tipo
            // Agrega aquí las demás propiedades del evento que necesites
          };

          this.loadEvent(id_event); // Cargar los detalles del evento utilizando su ID
          this.ticketItems1.push(eventDetails); // Agregar los detalles del evento al arreglo ticketItems1
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadEvent(id_event: string): void {
    this.eventService.getEventID(id_event).subscribe(
      (response) => {
        console.log('evento buscado:', response);
        const eventCategory = response[0].categoria;
        const eventDetails = this.getEventDetails(eventCategory, response[0]);
        console.log('eventCategory:', eventCategory);
        console.log('eventDetails:', eventDetails);
        this.ticketItems.push(eventDetails); // Agregar los detalles del evento al arreglo ticketItems
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getEventDetails(category: string, event: any): any {
    let eventDetails: any = {
      nombre: event.nombre,
      fechaHora: event.fechaHora,
      pais: event.pais,
      ciudad: event.ciudad,
      lugar: event.lugar
    };

    if (category === 'Deportes') {
      eventDetails.equipo1 = event.equipo1;
      eventDetails.equipo2 = event.equipo2;
    } else if (category === 'Musica') {
      eventDetails.artista = event.artista;
    }

    return eventDetails; // Devolver los detalles del evento
  }
}
