import { Component, OnInit } from '@angular/core';
import { GastoService } from '../../gasto.service'; // Importa el servicio
import { Gasto } from '../../Gasto'; // Importa la interfaz

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.html'
})
export class Reporte implements OnInit {

  gastos: Gasto[] = [];

  constructor(private gastoService: GastoService) { }

  ngOnInit(): void {
    this.gastoService.obtenerDatos().subscribe(
      (data: Gasto[]) => {
        console.log('Datos cargados:', data);
        this.gastos = data;
      },
      (error) => {
        console.error('Error al cargar datos:', error);
      }
    );
  }
}