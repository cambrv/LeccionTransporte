import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rutas, RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
  rutas:Rutas[]=[]; 
  rutasEncontradas: Rutas[]=[];
  searchTerm: string;
  routes: Rutas[] = [];
  filteredRoutes: Rutas[] = [];
   constructor(private activatedRoute: ActivatedRoute, private _rutasService:RutasService, private Router:Router){
    this.rutasEncontradas = this._rutasService.rutasEncontradas;
    this.searchTerm = '';
   }
   
  ngOnInit():void{
   this.activatedRoute.queryParamMap.subscribe((queryParams) => {
     this.searchTerm = queryParams.get('searchTerm') ?? '';
     this.filtrarHeroes();

     });
   this.rutas = this._rutasService.getRutas();
   console.log(this.rutas);
   //para filtro
   this.routes = this._rutasService.getRutas();
   this.filteredRoutes = this.routes;
  }
  filtrarHeroes() {
   if (this.searchTerm.trim() === '') {
     this.rutasEncontradas = [];
   } else {
     this.rutasEncontradas = this._rutasService.buscarRutas(this.searchTerm);
   }
  }
  //Método para sacar la pos de cada heroe en html en el boton
  verRutas(idx: number){
   console.log(idx);
   this.Router.navigate(['/ruta', idx])
  }
  //Filtrado por tipo
  filterRoutesByType(type: string) {
    if (type === 'todo') {
      // Mostrar todas las rutas
      this.rutas = this.routes;
    } else if (type === 'interno') {
      // Filtrar las rutas internas
      this.rutas = this.routes.filter(route => route.tipo==='Interno');
    } else if (type === 'externo') {
      // Filtrar las rutas externas
      this.rutas = this.routes.filter(route => route.tipo==='Externo');
    } else {
      // No se ha seleccionado una opción válida
      this.rutas = [];
    }
  }
}
