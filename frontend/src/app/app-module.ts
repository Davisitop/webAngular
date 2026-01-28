import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; // <--- IMPORTANTE

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Informacion } from './components/informacion/informacion';
import { Formulario } from './components/formulario/formulario';
import { Menu } from './components/menu/menu';
import { Reporte } from './components/reporte/reporte';
import { Contacto } from './components/contacto/contacto';

@NgModule({
  declarations: [
    App,
    Informacion,
    Formulario,
    Menu,
    Reporte,
    Contacto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // <--- ESTO HACE QUE FUNCIONE EL SERVICIO
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }