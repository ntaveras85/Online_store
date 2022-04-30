import { Component } from "@angular/core";
import { ShoppingCartService } from 'src/app/Servicios_store/shopping-cart.services';

@Component({
    selector:'app-cart',
    template:`
    <!--propiedades de class servicio-->
    <ng-container *ngIf="{total:total$ | async, quantity:quantity$ | async} as dataCart">

        <!--{{dataCart | json}} - test--><!--Verifica como esta llegando la data(si es null)-->
    
        <mat-icon>add_shopping_cart</mat-icon><!--icono compra-->
    
        <!--ngIf muestra cuando tengo datos-->
      <ng-container *ngIf="dataCart.total">
          {{dataCart.total | currency}}
          ({{dataCart.quantity}})
      </ng-container>  
    </ng-container>
    `,
})
export class CartComponent{
  //objtener valor de la class servicio
    quantity$ = this.shoppingCartSvc.quantityAction$;
    total$ = this.shoppingCartSvc.totalAction$;
    cart$ = this.shoppingCartSvc.cardAction$;

    constructor(private shoppingCartSvc:ShoppingCartService) { }

}