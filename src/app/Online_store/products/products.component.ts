import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/Servicios_store/shopping-cart.services';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  template:`
     <app-header></app-header>
      <!--Los modulos de Ang.Material deben estar import en ANGULAR M.-->
      <section class="products">
      <app-product
      (addToCardClick)="addToCart($event)" 
      [product]="product"
        *ngFor="let product of products" >
      </app-product>
      </section>
`,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[];  
  constructor(private productSvc:ProductsService,private shoppingCartSvc:ShoppingCartService) { }

  //Este metodo me trae la info.cuando carga
  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap((products:Product[]) => this.products = products)
      )
      .subscribe();
  }
  //para agregar los product al carrito
  addToCart(product:Product):void {
    console.log('Add to Cart',product);
    this.shoppingCartSvc.updateCart(product);    
  }
}
