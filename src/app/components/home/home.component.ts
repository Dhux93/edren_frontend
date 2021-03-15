import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameUsuario = "";

  constructor(public authSvc: AuthService) { }


  obtenerUsuario():string{
   
    let user = JSON.parse(<string>localStorage.getItem("user"));
    if(user != null){
      return user.usuario;
    }else{
      return "Registrate o Inicia Session";
    }
    
  }

  ngOnInit(): void {
    this.nameUsuario = this.obtenerUsuario();
  }

}
