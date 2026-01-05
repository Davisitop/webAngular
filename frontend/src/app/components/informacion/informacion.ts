import { Component, OnInit } from '@angular/core';

// Interfaz para tipado estricto
interface Gasto {
  nombre: string;
  imagenUrl: string; 
}

@Component({
  selector: 'app-informacion',
  standalone: false,
  templateUrl: './informacion.html',
  styleUrl: './informacion.css',
})
export class Informacion implements OnInit {
  
  gastos: Gasto[] = []; 
  gastoSeleccionado: string | null = null; 

  constructor() { }

  ngOnInit(): void {
    // DEFINICIÓN DE DATOS
    // IMPORTANTE: Como las imágenes están en la carpeta 'public', 
    // la ruta es directa, sin "../" ni carpetas intermedias.
    this.gastos = [
      { 
        "nombre": "Vivienda", 
        "imagenUrl": "../vivienda.jpg"  // Asegúrate que en tu carpeta sea .jpg
      }, 
      { 
        "nombre": "Salud", 
        "imagenUrl": "../salud.png"
      },
      { 
        "nombre": "Educación", 
        "imagenUrl": "../educacion.png"
      },
    ];
  }

  mostrarOcultarInfo(tipoGasto: string): void {
    if (this.gastoSeleccionado === tipoGasto) {
      this.gastoSeleccionado = null; 
    } else {
      this.gastoSeleccionado = tipoGasto; 
    }
  }

  borrarGasto(gastoABorrar: string): void {
    this.gastos = this.gastos.filter(g => g.nombre !== gastoABorrar);
    
    if (this.gastoSeleccionado === gastoABorrar) {
      this.gastoSeleccionado = null;
    }
  }
}