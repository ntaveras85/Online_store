import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Servicios_store/shopping-cart.services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  //para mostrar el total de lo comprado en la tbl agregada
  total$ = this.shoppingSvc.totalAction$;
  cart$  = this.shoppingSvc.cardAction$;
  constructor(private shoppingSvc: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
