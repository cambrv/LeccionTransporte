import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { HomeComponent } from './components/home/home.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RutaComponent } from './components/ruta/ruta.component';
@NgModule({
  declarations: [
    AppComponent,
    QuienessomosComponent,
    HomeComponent,
    RutasComponent,
    NavbarComponent,
    RutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
