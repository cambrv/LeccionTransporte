import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private rutas: Rutas []=
  [
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "El Guabo",
      precioRuta: "$0.70",
      descripcion: "Ruta de Machala al Guabo",
      tipo:"Interno"
    },
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "El Cambio",
      precioRuta: "$0.50",
      descripcion: "Ruta de Machala al Cambio",
      tipo:"Interno"
    },
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "Huaquillas",
      precioRuta: "$2.50",
      descripcion: "Ruta de Machala al Huaquillas",
      tipo:"Interno"
    },
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "Guayaquil",
      precioRuta: "$8",
      descripcion: "Ruta de Machala a Guayaquil",
      tipo:"Externo"
    },
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "Cuenca",
      precioRuta: "$10",
      descripcion: "Ruta de Machala a Cuenca",
      tipo:"Externo"
    },
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "Loja",
      precioRuta: "$12",
      descripcion: "Ruta de Machala a Loja",
      tipo:"Externo"
    },
    {
      ciudadOrigen: "Guayaquil",
      ciudadDestino: "Machala",
      precioRuta: "$10",
      descripcion: "Ruta de GYE a Machala",
      tipo:"Externo"
    },
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "Ambato",
      precioRuta: "$20",
      descripcion: "Ruta de Machala a Ambato",
      tipo:"Interno"
    },
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "Esmeraldas",
      precioRuta: "$20",
      descripcion: "Ruta de Machala al Esmeraldas",
      tipo:"Externo"
    },
    {
      ciudadOrigen: "Quito",
      ciudadDestino: "Machala",
      precioRuta: "$10",
      descripcion: "Ruta de Quito a Machala",
      tipo:"Interno"
    }
  ]
  rutasEncontradas: Rutas[] = [];

  getRutas(){
    return this.rutas;
  }
  
  getRuta(idx:number):Rutas{
    return this.rutas[idx];
  }
  buscarRutas(termino: string): Rutas[] {
    termino = termino.toLowerCase();
    return this.rutas.filter(rutas => rutas.ciudadDestino.toLowerCase().includes(termino)|| rutas.ciudadOrigen.toLowerCase().includes(termino));
  }
  
  constructor() {
    console.log("Servicio listo para usar.");  
  }
}
export interface Rutas{
  ciudadOrigen: string;
  ciudadDestino: string;
  precioRuta: string;
  descripcion: string;
  tipo:string;
}