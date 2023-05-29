import { Component } from '@angular/core'; // Importación del decorador Component de Angular
import { FormGroup, FormControl } from '@angular/forms'; // Importación de los módulos FormGroup y FormControl de Angular Forms
import { UserService } from 'src/app/servicio/user-service.service';  // Importación del servicio UserService

@Component({
  selector: 'app-create-event', // Selector del componente
  templateUrl: './create-event.component.html', // Ruta del archivo de plantilla del componente
  styleUrls: ['./create-event.component.css'] // Rutas de los archivos de estilos del componente
})
export class CreateEventComponent {
  evento: any[] = []; // Variable para almacenar los eventos
  categoria: string[] = ['Convencion', 'Musica', 'Deportes']; // Array de categorías disponibles
  miFormulario = new FormGroup({ // Definición de un formulario utilizando FormGroup
    categoria: new FormControl('Convencion'), // Control para la categoría con valor predeterminado 'Convencion'
    nombre: new FormControl(''), // Control para el nombre vacío
    fechaHora: new FormControl(''), // Control para la fecha y hora vacío
    pais: new FormControl(''), // Control para el país vacío
    ciudad: new FormControl(''), // Control para la ciudad vacío
    lugar: new FormControl(''), // Control para el lugar vacío
    artista: new FormControl(''), // Control para el artista vacío
    equipo1: new FormControl(''), // Control para el equipo local vacío
    equipo2: new FormControl('') // Control para el equipo visitante vacío
  });
  isLoading = false; // Variable para indicar si la carga está en progreso
  isSuccess = false; // Variable para indicar si la carga ha sido exitosa

  constructor(private userService: UserService) {} // Inyección del servicio UserService

  onSubmit() { // Función que se ejecuta al enviar el formulario
    this.isLoading = true; // Se establece isLoading en true para mostrar la carga en progreso
    const categoria = this.miFormulario.value.categoria; // Se obtiene el valor de la categoría seleccionada
    const nombre = this.miFormulario.value.nombre; // Se obtiene el valor del nombre ingresado
    const fechaHora = this.miFormulario.value.fechaHora; // Se obtiene el valor de la fecha y hora ingresada
    const pais = this.miFormulario.value.pais; // Se obtiene el valor del país ingresado
    const ciudad = this.miFormulario.value.ciudad; // Se obtiene el valor de la ciudad ingresada
    const lugar = this.miFormulario.value.lugar; // Se obtiene el valor del lugar ingresado
    const pro = { // Objeto que representa el evento a crear
      nombre,
      fechaHora,
      pais,
      ciudad,
      lugar,
      categoria,
      ...(categoria === 'Musica' && { artista: this.miFormulario.value.artista }), // Se agrega el artista solo si la categoría es 'Musica'
      ...(categoria === 'Deportes' && { // Se agregan los equipos local y visitante solo si la categoría es 'Deportes'
        equipo1: this.miFormulario.value.equipo1,
        equipo2: this.miFormulario.value.equipo2
      })
    };

    this.userService.createEvent(pro).subscribe(data => { // Se llama al método createEvent del servicio UserService
      this.evento.push(data); // Se agrega el evento creado al arreglo evento
      setTimeout(() => { // Se utiliza setTimeout para simular un tiempo de espera de 10 segundos antes de detener la carga
        this.isLoading = false; // Se detiene la carga
        this.isSuccess = true; // Se marca como carga exitosa
      }, 10000);
    });
  }

  reloadPage() { // Función para recargar la página
    location.reload(); // Se utiliza la función location.reload() para recargar la página
  }
}
