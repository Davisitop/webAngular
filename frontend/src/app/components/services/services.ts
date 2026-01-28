import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  // Aquí guardaremos todas las facturas
  private facturas: any[] = [];

  constructor() { }

  // Método para guardar una nueva factura
  agregarFactura(factura: any) {
    this.facturas.push(factura);
  }

  // Método para devolver la lista de facturas
  getFacturas() {
    return this.facturas;
  }
}