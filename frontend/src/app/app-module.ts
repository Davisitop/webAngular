import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; // <--- IMPORTANTE para tu práctica

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Informacion } from './components/informacion/informacion';
import { Formulario } from './components/formulario/formulario';
import { Menu } from './components/menu/menu';
import { Reporte } from './components/reporte/reporte';
import { Contacto } from './components/contacto/contacto';

@NgModule({
  declarations: [
    // Aquí solo van COMPONENTES. No pongas 'Gasto' (es interfaz) ni servicios.
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
    HttpClientModule // <--- Agregado para que funcione el servicio de gastos
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }