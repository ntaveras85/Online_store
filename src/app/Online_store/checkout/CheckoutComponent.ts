import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { DataService } from 'src/app/Servicios_store/data.service';
import { ShoppingCartService } from 'src/app/Servicios_store/shopping-cart.services';
import { Details, Order } from '../interface/order.interface';
import { /*Store,*/ tiendaOnline } from '../interface/stores.interface';
import { Product } from '../products/interfaces/product.interface';

@Component({
  selector: 'app-checkout',
  templateUrl:'./checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent  {
  //objeto mostrara los datos del checkout
  model = {
    name: 'Ing.Noel Taveras Castillo',
    store: '',
    shippingAddress: '',
    city: ''
  };
  
  isDelivery = true;
  cart: Product[] = [];
  
  //aqui amarro la interface o tabla(stores.interface.ts)
  stores : tiendaOnline [] = []

  constructor(private dataSvc: DataService,
              private shoppingCartSvc: ShoppingCartService,
              private router: Router) { }
  
  onPickupOrDelivery(value:boolean):void {
    this.isDelivery = value;
  }
  
  ngOnInit():void {
    this.getStores();
     this.getDataCart();
  }
  
  onSubmit({value:formData}: NgForm):void{
      console.log('Guardar',formData);
      //para almacenar los datos del formulario
      const data: Order = {
        ...formData,
        date: this.getCurrentDay,
        isDelivery: this.isDelivery
      }
      this.dataSvc.saveOrder(data)
      .pipe(tap(res => console.log('Order ->',res)),
        switchMap( ({id:orderId}/*recupero el id con la orden*/)  => {
            //const orderId = order.id
            const details = this.prepareDetails();
            return this.dataSvc.saveDetailsOrder({details,orderId});
        }),
        tap(() => this.router.navigate(['/compra'])),//me lleva al formCompra
        delay(2000),
        tap(() => this.shoppingCartSvc.resetCart())//aqui reset el carrito
      )
      .subscribe();
    }

   /*private getStores():void{
      this.dataSvc.getStores()
      .pipe(tap(res => console.log(res)))
      .subscribe()
    }*/
     
      //aqui me subscribo al me
      getStores():void{
      this.dataSvc.getStores()
      .pipe(
          tap((stores:tiendaOnline[]) => this.stores = stores))
      .subscribe()
    }

    private getCurrentDay():string {
        return new Date().toLocaleDateString();
    }
    
    private prepareDetails(): Details[]{
      const details: Details[] = [];
      this.cart.forEach((product:Product) => {//recorre el carrito con los productos agregado
        const  {id:productId,name:productName,qty:quantity,stock} = product;
        details.push({productId,productName,quantity})
      })
      return details;
    }
    
    private getDataCart():void {
      this.shoppingCartSvc.cardAction$
      .pipe(
        tap((products:Product[]) => this.cart = products )
      )
      .subscribe()
    }  
}