import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Informacion } from './components/informacion/informacion';
import { Formulario } from './components/formulario/formulario';
import { Reporte } from './components/reporte/reporte';
// 1. IMPORTANTE: Importar el componente Contacto
import { Contacto } from './components/contacto/contacto';

const routes: Routes = [
  { path: '', component: Informacion },
  { path: 'informacion', component: Informacion },
  { path: 'registro', component: Formulario },
  { path: 'reporte', component: Reporte },
  
  // 2. IMPORTANTE: Definir la ruta aquí
  { path: 'contacto', component: Contacto },
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }