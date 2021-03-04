import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

   productList:any = [];


  constructor(private productService:ProductService) {
    console.log("1. Konstruktor");
  }

  ngOnInit(): void {
    console.log("2. ngOnInit");
    this.productList = this.productService.getProductList();
    console.log(this.productList);

  }
}
