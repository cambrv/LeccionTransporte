import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  ruta:any={};
constructor(private activatedRoute: 
  ActivatedRoute, private _rs:RutasService, private route: Router ) {
  this.activatedRoute.params.subscribe( params =>{
    this.ruta=_rs.getRuta(params['id'])
    console.log(params['id'])
  })
 }
 redirigir():void{
  this.route.navigate(['rutas']);
 }
}
