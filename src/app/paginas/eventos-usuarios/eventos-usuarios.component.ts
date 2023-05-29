import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicio/user-service.service'; 
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-eventos-usuarios',
  templateUrl: './eventos-usuarios.component.html',
  styleUrls: ['./eventos-usuarios.component.css']
})
export class EventosUsuariosComponent implements OnInit {
  events: any[] = []; // Lista de eventos
  selectedEvent: any = null; // Evento seleccionado
  ticketsAvailable: any[] = []; // Tickets disponibles para un evento
  userId: string | null = null; // ID del usuario
  selectedEventId: string | null = null; // ID del evento seleccionado
  selectedCategory: string | null = null; // Categoría seleccionada
  ticketAddedToCart: boolean = false; // Bandera para indicar si se agregó un ticket al carrito
  cartItems: any[] = []; // Ítems del carrito

  constructor(private eventService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id']; // Obtener el ID del usuario de los parámetros de la ruta
      console.log('userId:', this.userId);
      this.getEvents(); // Obtener los eventos
      this.getCartItems(); // Obtener los ítems del carrito
    });
  }

  getEvents(category: string | null = null): void {
    if (!category) {
      this.eventService.getEvents().subscribe(
        (response) => {
          this.events = response; // Asignar la respuesta de la solicitud a la lista de eventos
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.eventService.getEventbyCate(category).subscribe(
        (response) => {
          this.events = response; // Asignar la respuesta de la solicitud a la lista de eventos
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  showTickets(event: any): void {
    if (!this.selectedCategory) {
      this.selectedEventId = event.cod_E; // Asignar el ID del evento seleccionado
    }
    this.ticketAddedToCart = false; // Restablecer la bandera de ticket agregado al carrito
    this.eventService.getTicketEvent(event.cod_E).subscribe(
      (response) => {
        // Filtrar solo los tickets disponibles
        this.ticketsAvailable = response.filter((ticket: any) => ticket.disponible === true);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  buyTicket(ticket: any): void {
    const cartItem = {
      userID: this.userId,
      ticketID: ticket._id,
      precio: ticket.precio
    };
    this.eventService.createCart(cartItem).subscribe(
      (response) => {
        console.log('Ticket added to cart:', response);
        this.ticketAddedToCart = true;
        alert('En el carrito!'); // Mostrar una alerta de que el ticket se ha agregado al carrito
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getCartItems(): void {
    if (this.userId) {
      this.eventService.getUserCart(this.userId).subscribe(
        (response) => {
          this.cartItems = response; // Asignar la respuesta de la solicitud a la lista de ítems del carrito
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  removeCartItem(ticketID: string): void {
    if (this.userId) {
      this.eventService.deleteCart(this.userId).subscribe(
        (response) => {
          console.log('Cart item removed:', response);
          this.getCartItems(); // Actualizar los ítems del carrito después de eliminar un ticket
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  checkout(): void {
    // Actualizar la disponibilidad de los tickets y mover los ítems a una base de datos diferente
    const ticketIDs = this.cartItems.map(item => item.ticketID);
    console.log('Ticket IDs:', ticketIDs); // Mostrar los IDs de los tickets en la consola
    const data = {
      _id: ticketIDs,
      disponible: false
    };
    const data2 = {
      userID: this.userId,
      ticketID: ticketIDs
    };
    this.eventService.updateTicketDis(data).subscribe(
      (response) => {
        this.saveUserTickets(data2); // Guardar los tickets del usuario
        console.log('Tickets updated:', response);
        this.deleteCartItems(); // Eliminar los ítems del carrito
        alert('Compra realizada!'); // Mostrar una alerta de que la compra se ha realizado
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  saveUserTickets(data: any): void {
    this.eventService.createuserTicketsave(data).subscribe(
      (saveResponse) => {
        console.log('User tickets saved:', saveResponse);
        this.deleteCartItems(); // Eliminar los ítems del carrito
      },
      (saveError) => {
        console.error(saveError);
      }
    );
  }

  deleteCartItems(): void {
    if (this.userId) {
      this.eventService.deleteCart(this.userId).subscribe(
        (response) => {
          console.log('Cart items deleted:', response);
          // Realizar cualquier acción adicional después de eliminar los ítems del carrito
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
