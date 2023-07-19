import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RutaComponent } from './components/ruta/ruta.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'rutas', component:RutasComponent},
  {path: 'ruta/:id', component:RutaComponent},
  {path: 'quienessomos', component:QuienessomosComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
