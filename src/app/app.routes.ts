import {Routes} from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ProductoComponent } from './components/producto/producto.component';


export const ROUTES: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'producto/id:', component: ProductoComponent},
    {path: '', pathMatch:'full', redirectTo:'home'},
    {path: '**', pathMatch:'full', redirectTo:'home'},

];