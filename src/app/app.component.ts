import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Selector utilizado para referenciar el componente en el HTML
  templateUrl: './app.component.html', // Ruta al archivo de plantilla HTML asociado al componente
  styleUrls: ['./app.component.css'] // Ruta al archivo de hojas de estilo CSS asociado al componente
})
export class AppComponent {
  title = 'TicketMaster'; // Propiedad que almacena el título del componente
}
