import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


// importamos las rutas
import { ROUTES } from './app.routes';

//servicios
import {  MercadolibreService } from './services/mercadolibre.service';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductoComponent,
    HomeComponent,
    NavbarComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [
    MercadolibreService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
