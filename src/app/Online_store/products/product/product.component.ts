import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush//para detectar cambio en el componente
})
export class ProductComponent implements OnInit {
  //comunico el padre con el hijo(decorador)
  @Input() product!:Product;
  //comunico el hijo con el padre(decorador)
  @Output() addToCardClick = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  //agrego producto al padre(products)
  onClick():void{
    console.log('click',this.product);
    this.addToCardClick.emit(this.product);
  }
}
