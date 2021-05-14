import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from '../../services/mercadolibre.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {
  productosDetalle: any[] = [];
  constructor(private mercado: MercadolibreService) { }

  ngOnInit() {
  }
  verProducto(item:any){
    console.log("esto es el item",item)
    let idProduct;
    
      idProduct = item.id;
      this.mercado.getProductsDetail(idProduct)
    .subscribe((data: any) =>{
      
      this.productosDetalle = data.results;  
      console.log("la data final es:", data)
    })
  }
}
