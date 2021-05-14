import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from '../../services/mercadolibre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  productos: any[] = [];
  

  constructor( private mercado: MercadolibreService ) {
    
    this.mercado.getProducts()
    .subscribe ((data: any) => {
      console.log(data.results);
      this.productos = data.results;  
    });
   }

  

}
