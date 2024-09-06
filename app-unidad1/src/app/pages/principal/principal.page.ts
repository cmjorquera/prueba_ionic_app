import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  ussuario:   string ="";
  contrasena: string ="";
  jug1:       string ="";
  jug2:       string ="";

  constructor(private router: Router) { }

  // estamos reciviendo los datos de extra (seguridad contra nulos)
  ngOnInit() {
    console.log();

    let extras = this.router.getCurrentNavigation()?.extras;

    //rescatando y validando que este definida
    if(extras?.state){
      this.ussuario   = extras?.state["usuario"];
      this.contrasena = extras?.state["cintrasena"];
      this.jug1       = extras?.state["jugador1"];
      this.jug2       =extras?.state["jugador2"];



    }
   
  }

  cerrarSession(){
    // let extras :NavigationExtras ={
    //   replaceUrl: true
    // }
    this.router.navigate(['login']);
  }

}
;