import { Component, OnInit } from '@angular/core';
// CORRECCIÓN: Actualizamos la ruta aquí también
import { FacturasService } from '../services/services';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.html',
  standalone: false
})
export class Reporte implements OnInit {

  listaFacturas: any[] = [];
  total: number = 0;

  constructor(private facturasService: FacturasService) { }

  ngOnInit() {
    this.listaFacturas = this.facturasService.getFacturas();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = 0;
    for (let item of this.listaFacturas) {
      this.total += item.valor;
    }
  }
}