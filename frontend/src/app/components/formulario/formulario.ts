import { Component } from '@angular/core';
// CORRECCIÓN: La ruta ahora apunta a donde guardaste el archivo
import { FacturasService } from '../services/services'; 

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.html',
  standalone: false
})
export class Formulario {

  ruc: string = '';
  valor: number = 0;
  gasto: string = 'Ninguno';

  constructor(private facturasService: FacturasService) { }

  agregar() {
    if (this.valor <= 0 || this.ruc === '') {
      alert('Por favor ingrese un RUC y un Valor válido.');
      return;
    }

    const nuevaFactura = {
      ruc: this.ruc,
      valor: this.valor,
      gasto: this.gasto
    };

    this.facturasService.agregarFactura(nuevaFactura);

    alert('Factura agregada correctamente');
    this.ruc = '';
    this.valor = 0;
    this.gasto = 'Ninguno';
  }
}