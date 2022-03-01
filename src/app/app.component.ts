import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  titulo = 'Registro de usuarios';
    mensaje = "";
    registrado = false
    nombre:string="";
    apellido:string="";
    cargo:string="";





registrarUsuario(){

  this.registrado=true;

  this.mensaje="usuario registrado con éxito"

}

}




