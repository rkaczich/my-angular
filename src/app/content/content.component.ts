import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

   productList:any = [];

   myDate:Date = new Date();

   object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  constructor(private productService:ProductService) {
    console.log("1. Konstruktor");
  }

  ngOnInit(): void {
    console.log("2. ngOnInit");
    this.productList = this.productService.getProductList();
    console.log(this.productList);

  }
}
