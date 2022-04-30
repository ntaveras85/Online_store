import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Verificacion de prueba de conexion';

  getName():void{
    console.log('Verificacion de prueba de conexion');
  }
}

