import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rutas, RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [RutasService]
})
export class NavbarComponent {
  rutas:any[];
  rutasEncontradas: Rutas[] = [];
  searchTerm: string='';
  
  constructor(private activatedRoute: ActivatedRoute, private _rutasService: RutasService, private Router:Router) {
    this.rutas = this._rutasService.getRutas();
  }
  filtrarObjetos() {
    this.rutasEncontradas = this._rutasService.buscarRutas(this.searchTerm);
    this.Router.navigate(['/rutas'], { queryParams: { searchTerm: this.searchTerm } });  
    console.log('Realizando búsqueda:', this.searchTerm);
  }  

}
