import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { MercadolibreService } from '../../services/mercadolibre.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[]=[];
  productosDetalle: any[] = [];
  constructor( private mercado: MercadolibreService,
              private router: Router) { }

  ngOnInit() {
  }
  verProducto(item:any){
    console.log("esto es el item",item)
    let idProduct;
    
      idProduct = item.id;
      this.router.navigate(['/prodcuto', idProduct])
  }
  
      
  
}
