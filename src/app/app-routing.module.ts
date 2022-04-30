import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from "./Online_store/checkout/CheckoutComponent";
import { ThankYouPageComponent } from './Online_store/checkout/thank-you-page/thank-you-page.component';
import { ProductOfertaComponent } from './Online_store/products/product-oferta/product-oferta.component';
import { ProductsComponent } from './Online_store/products/products.component';
const routes: Routes = [
  {path: '',redirectTo: '/Oferta', pathMatch: 'full'},
  {path:'Oferta',component:ProductOfertaComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'Producto',component:ProductsComponent},
  {path:'compra',component:ThankYouPageComponent},
  {path: '**', redirectTo: '/Oferta', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
