import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { url } from "inspector";
import { Observable } from "rxjs";
import { DetailsOrder, Order } from "../Online_store/interface/order.interface";
import { tiendaOnline } from "../Online_store/interface/stores.interface";

@Injectable({
    providedIn:'root'
})
export class DataService{
    //siempre es importante las inferfaces por cada metodo(para no usar any)     
    
    // es importante el typeo de los datos

    //link de consulta de la data al servidor
    private apiURL = 'http://localhost:3000';
    
    //al consumir una API. siempre se debe agregar al constructor el: HttpClient 
    constructor(private http: HttpClient){}

    //devolvera un array de tienda(aqui tambien agrego la interface o tabla(store.components.ts))
    getStores():Observable<tiendaOnline[]>{
        return this.http.get<tiendaOnline[]>(`${this.apiURL}/stores`)
    }
    
    //siempre es importante las inferfaces por cada metodo(para no usar any)

    //guarda la orden
    saveOrder(order:Order):Observable<Order>{
        return this.http.post<Order>(`${this.apiURL}/orders`,order);
    }
    
    //guarda detalle de la orden
    saveDetailsOrder(details:DetailsOrder):Observable<DetailsOrder>{
        return this.http.post<DetailsOrder>(`${this.apiURL}/detailsOrders`,details);       
    }
    //siempre es importante las inferfaces por cada metodo(para no usar any)
}