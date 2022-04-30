import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

//Lo utilizo cuando trabajo con una API
import { HttpClientModule } from '@angular/common/http';

//componente del proyecto
import { CartComponent } from './Servicios_store/cart/cart.component';
import { CheckoutComponent } from "./Online_store/checkout/CheckoutComponent";
import { HeaderComponent } from './Online_store/header/header.component';
import { ProductsComponent } from './Online_store/products/products.component';
import { ProductComponent } from './Online_store/products/product/product.component';
import { MaterialModule } from './Online_store/AngularMaterial/material.module';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ProductOfertaComponent } from './Online_store/products/product-oferta/product-oferta.component';
import { DetailsComponent } from './Online_store/checkout/details/details.component';
import { ThankYouPageComponent } from './Online_store/checkout/thank-you-page/thank-you-page.component';
import { NtaverasComponent } from './Online_store/ntaveras/ntaveras.component';


//Aqui lo declaro, para que los demas los puedan ver
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    ProductOfertaComponent,
    DetailsComponent,
    ThankYouPageComponent,
    NtaverasComponent
  ],
  
  imports: [
    MatCommonModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:
  [
    MatButtonModule,
  ]//me sirve para exponer los componentes a otros modulos
})
export class AppModule { }