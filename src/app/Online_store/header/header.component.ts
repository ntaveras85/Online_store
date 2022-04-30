import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template:`
    <mat-toolbar color="accent"> 
           <!--me lleva a la raiz del page-->
       <a [routerLink]="['/']"><span><p><i>e-Commerce(onlineStore)
       </i></p></span></a>
       <a  [routerLink]="['/Producto']"><span class="listProduct">Ver listado de productos</span></a>
      
      <span class="spacer"></span>
      <app-cart class="mouseHover" (click)="goToCheckout()"></app-cart>
    </mat-toolbar>
    <p>
    `
    ,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router){}

  //este metodo me lleva al component checkout(verificacion)
  goToCheckout(): void{
    this.router.navigate(['/checkout']);
  }

  ngOnInit(): void {
  }

}
