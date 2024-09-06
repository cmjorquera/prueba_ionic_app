import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }
  mdl_user :string ='';
  mdl_pass :string ='';


  ngOnInit() {
    console.log();
  }


  login(){
    // enviar paremetros  de uan pag a otra
    // como se rescatan ??
    let extras:NavigationExtras ={
      state:{
        "usuario":    this.mdl_user,
        "cintrasena": this.mdl_pass,
        "jugador1":   "Guadalupe Jorquera",
        "jugador2":   "Cristian Jorquera"
      },
      replaceUrl : true // en todas ls navegaciones
    }
    this.router.navigate(['principal'],extras);
  }


}
