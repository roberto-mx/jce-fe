import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.css']
})
export class SelectServiceComponent implements OnInit {
  public title = "Servicios";
  public misprovedores: number;
  public servicios = [
    {nom:"Carpintero",categ:"General",ranking:10, imagepath:"../../../assets/images/servicios/carpintero.png"},
    {nom:"Plomero",categ:"General",ranking:10, imagepath:"../../../assets/images/servicios/plomero.png"},
    {nom:"Electricista",categ:"General",ranking:10, imagepath:""},
    {nom:"Aire Acondicionado/Refrigeradores",categ:"General",ranking:10, imagepath:""},
    {nom:"Albañil",categ:"General",ranking:10, imagepath:""},
    {nom:"Pintor",categ:"General",ranking:10, imagepath:"../../../assets/images/servicios/pintor.png"},
    {nom:"Jardinero",categ:"General",ranking:10, imagepath:""},
    {nom:"Estilista",categ:"Personal",ranking:10, imagepath:""},
    {nom:"Mecanico",categ:"Automotriz",ranking:10, imagepath:""},
    {nom:"Mecanico Electrico",categ:"Automotriz",ranking:10, imagepath:""},
    {nom:"Veterinario",categ:"Mascotas",ranking:10, imagepath:""},
    {nom:"Estetica para mascotas",categ:"Mascotas",ranking:10, imagepath:""},
    {nom:"Limpieza Negocios",categ:"Limpieza",ranking:10, imagepath:""},
    {nom:"Ayuda Domestica",categ:"Limpieza",ranking:10, imagepath:""},
    {nom:"Limpieza de Automovil",categ:"Limpieza",ranking:10, imagepath:""},
    {nom:"Instructor de Deporte",categ:"Deportes",ranking:10, imagepath:""},
    {nom:"Musicos",categ:"Eventos",ranking:10, imagepath:""},
    {nom:"Meseros",categ:"Eventos",ranking:10, imagepath:""},
    {nom:"Cocineros",categ:"Eventos",ranking:10, imagepath:""},
    {nom:"Entretenimiento",categ:"Eventos",ranking:10, imagepath:""},
    {nom:"Sestreria",categ:"Otros",ranking:10, imagepath:""},
    {nom:"Asistente Administrativa",categ:"Otros",ranking:10, imagepath:""},
    {nom:"Apoyo a Educacion en Casa",categ:"Otros",ranking:10, imagepath:""},
    {nom:"Guarderia en Casa",categ:"Otros",ranking:10, imagepath:""}    
  ];

  constructor() { 
    this.misprovedores = 5;
  }

  ngOnInit(): void {
  }

}
