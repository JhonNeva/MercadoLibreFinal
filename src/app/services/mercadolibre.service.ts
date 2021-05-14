import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {
  

  constructor(private http: HttpClient) {
    console.log("servicio Listo");
   }

   getProducts (){
    return this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=%E2%80%8B:query')
   }

   getProductsBusqueda (termino: string){
    return this.http.get(`https://api.mercadolibre.com/sites/MLA/search?q=${termino}`)
   }

   getProductsDetail(id: string){
     console.log("este es el id que se va a enviar", id);
    return this.http.get(`https://api.mercadolibre.com/items/${id}/description`)
   }
}
