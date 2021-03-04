import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList = [
    {id: 1, name:"Käsemesser"},
    {id: 2, name: "Käsedrucker"},
    {id: 3, name: "Käsehobel"}
  ]

  constructor() {
    console.log("Product-Service created...");
  }

  getProductList(){
    // hier kommt der Datenbankzugriff hin
    return this.productList;
  }
}
