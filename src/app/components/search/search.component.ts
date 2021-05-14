import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { MercadolibreService } from '../../services/mercadolibre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  productosBusqueda: any[] = [];
  constructor(private mercado: MercadolibreService) { }

  ngOnInit() {
  }

  buscar(termino: string){
    console.log(termino);
    this.mercado.getProductsBusqueda(termino)
    .subscribe((data: any) =>{
      console.log(data)
      this.productosBusqueda = data.results;  
    })
  
  }  
}
