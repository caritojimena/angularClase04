import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../../../models/producto';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-slider-producto-item',
  templateUrl: './slider-producto-item.component.html',
  styleUrls: ['./slider-producto-item.component.scss']
})
export class SliderProductoItemComponent implements OnInit {
 @Input() producto:Producto; //Ingresa informaciòn de la componente a traves de la variable
 @Output() adicionar = new EventEmitter<Producto>(); //Sale la informaciòn de la componente a traves del evento personalizado
  constructor() { }
  ngOnInit() {
  }

  agregar(){
    console.log(`Agregado ${this.producto.id}:${this.producto.nombre}`);
    //algun proceso aca
    //disparar el nuevo 
    this.adicionar.emit(this.producto);
   }

}
