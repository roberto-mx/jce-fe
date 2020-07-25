import { Component, OnInit } from '@angular/core';
//import { DefaultService } from 'backend-api';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
//CA0088 EAB330
  nombre: String;
  profesion: String;
  serviceID: String;
  fechaSolicitud: Date;
  servicio: String;
  subServicio: String;
  fotoUrl: String;
  estrellas: String;

  //constructor(private _defaultService: DefaultService) { }
  constructor(){}

  ngOnInit(): void {
    this.nombre = "Luis Briseño - ";
    this.profesion ="Electrician";
    this.serviceID ="A-#12164-PTW";
    this.fechaSolicitud = new Date("11/20/2019");
    this.servicio = "Electricista";
    this.subServicio="Refrigerador";
    this.fotoUrl = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    this.estrellas="*****";

    /*
    this._defaultService.userGet().subscribe( data  => {
      this.user = data;
      console.log(this.user);
    });*/
  }

  cancelarServicio(event){
    this.nombre = "Luis Briseño";
    alert("servicio Cancelado");
  }

  calificarServicio(event){
    alert("servicio Calificado");
  }


}
