import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
                  //enlace de los datos
  private apiURL = 'http://localhost:3000/products';
  constructor(private http:HttpClient) { }
  
  //para obtener los datos de la API(de producto)
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL)
  }
}
