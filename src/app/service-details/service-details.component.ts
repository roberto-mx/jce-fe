import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
//CA0088 EAB330
  name: String;
  profesion: String;
  serviceID: String;
  fechaSolicitud: String;
  servicio: String;
  subServicio: String;
  fotoUrl: String;

  constructor() { }

  ngOnInit(): void {
    this.name = "Luis Briseño - ";
    this.profesion ="Electrician";
    this.serviceID ="A-#12164-PTW";
    this.fechaSolicitud ="10/10/2010";
    this.servicio = "Electricista";
    this.subServicio="Refrigerador";
    this.fotoUrl = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  }

}
