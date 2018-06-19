import { Component, OnInit } from '@angular/core';
import {Producto} from '../../../models/producto';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-slider-producto',
  templateUrl: './slider-producto.component.html',
  styleUrls: ['./slider-producto.component.scss']
})
export class SliderProductoComponent implements OnInit {
  productos: Producto[]; //lista de datos
  constructor() { 
    this.productos=new Array<Producto>(); //<Producto> es un template
    for (let i = 0; i < 5; i++) {
     let p =new Producto();
     p.id=i;
     p.nombre = `nombre ${i}`;
     p.descripcion = `descripcion ${i}`;
      p.precio =i*1000;
      p.image = "https://loremflickr.com/320/240/dog";
      this.productos.push(p);
        }
  }
  ngOnInit() {
  }

  onAdicionar(producto:Producto){
    console.log(`producto agregado`);
  }
    
}
