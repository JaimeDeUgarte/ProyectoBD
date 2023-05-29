// Importa las clases y módulos necesarios desde Angular
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Importa el servicio UserService desde '../../servicio/user-service.service'
import { UserService } from '../../servicio/user-service.service';

// Componente decorado con @Component
@Component({
  selector: 'app-create-datos-usuario',
  templateUrl: './create-datos-usuario.component.html',
  styleUrls: ['./create-datos-usuario.component.css']
})
export class CreateDatosUsuarioComponent {
  userId?: string; // Variable para almacenar el ID del usuario
  userinfo: any[] = []; // Arreglo para almacenar la información del usuario
  miFormulario = new FormGroup({
    // FormGroup para el formulario de datos del usuario
    nombre_u: new FormControl('', Validators.required),
    nombre_com: new FormControl('', Validators.required),
    Fecha_N: new FormControl('', Validators.required),
    ci: new FormControl('', Validators.required)
  });
  profilePic: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'; // URL de la imagen de perfil por defecto
  profilePicOptions: string[] = [
    // Arreglo de opciones de imágenes de perfil
    'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP1063-CUSA15534_00-AV00000000000005/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000',
    'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP4396-CUSA04289_00-AV00000000000009/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000',
    'https://image.api.playstation.com/cdn/UP4312/CUSA11327_00/Rzlb502W6Gs22lWIyOuqt8AEvF3O4LSi.png?w=440&thumb=false',
    'https://image.api.playstation.com/cdn/UP1024/CUSA04191_00/yTQp9ycrEcpToRR5rZaWfe0a1g94kA9u.png?w=440&thumb=false',
    'https://image.api.playstation.com/cdn/UP1023/CUSA07718_00/NttB60oN3WLqThv1xuCHTE7Ws0PoqCF9.png?w=440&thumb=false',
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  ];
  isLoading = false; // Bandera para indicar si se está cargando
  isSuccess = false; // Bandera para indicar si el registro fue exitoso

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id']; // Obtén el ID del usuario de la URL
    });
  }

  // Método para cambiar la imagen de perfil seleccionada
  changeProfilePic(option: string) {
    this.profilePic = option;
  }

  // Método para enviar el formulario
  submitForm() {
    if (this.miFormulario.valid) {
      // Si el formulario es válido

      // Obtén los valores del formulario
      const { nombre_u, nombre_com, Fecha_N, ci } = this.miFormulario.value;

      // Crea el objeto de datos del usuario a enviar
      const userData = {
        userID: this.userId,
        nombre_u,
        nombre_com,
        Fecha_N,
        ci,
        profilePic: this.profilePic
      };

      // Llama al servicio para enviar los datos del usuario al backend
      this.userService.createUs(userData).subscribe(data => {
        this.userinfo.push(data); // Agrega los datos del usuario al arreglo userinfo
        this.router.navigate(['/user', this.userId]); // Navega a la página del usuario
      });
    }
  }
}
