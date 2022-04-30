import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Product } from "../Online_store/products/interfaces/product.interface";


@Injectable(
    {providedIn:'root'}
)
//link ayuda(https://www.youtube.com/watch?v=i-oYrcNtc2s)
export class ShoppingCartService {

    //lo usare para ir insertando los productos agregados al Car
    products: Product [] = [];

    //Investigar sobre este tema(observable)(Subject y BehaviorSubject )
    private cardSubject = new BehaviorSubject<Product[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);
    private quantitysubject = new BehaviorSubject<number>(0);
    
    //Aqui devuelvo los observable a quien lo consuma
    get totalAction$():Observable<number> {
        return this.totalSubject.asObservable();
    }
    
    //Aqui devuelvo los observable a quien lo consuma
    get quantityAction$():Observable<number> {
        return this.quantitysubject.asObservable();
    }
    //Aqui devuelvo los observable a quien lo consuma
    get cardAction$():Observable<Product[]> {
        return this.cardSubject.asObservable(); 
    }
    
    //Desde aqui llmm los mtdos privado
    updateCart(product:Product):void {
        this.addToCart(product);
        this.quantityProducts();
        this.calcTotal();
    }
    
    //agregar producto al carrito 
    private addToCart(product:Product):void {
        //verificacion si el producto existe
        const isProductIncart = this.products.find(({id})=> id == product.id)
        
        if(isProductIncart){//estudiar este codigo
            isProductIncart.qty += 1;
       } else{//si no le agregamos la cantidad
           this.products.push({...product,qty: 1})
       }
        //this.products.push(product);(ya esta en el else)
        this.cardSubject.next(this.products);
    }
    //para agregar la cantidad de los productos agregado
    private quantityProducts():void {
        const quantity = this.products.reduce((acc,prod)=>acc += prod.qty,0);
        this.quantitysubject.next(quantity);
    }
    //suma total producto
    private calcTotal():void {
        const total = this.products.reduce((acc,prod)=>acc += (prod.price*prod.qty),0);
        this.totalSubject.next(total);
    }
    
    //reset el carrito de compra
    resetCart():void{
        this.cardSubject.next([]);
        this.quantitysubject.next(0);
        this.totalSubject.next(0);       
    }
}