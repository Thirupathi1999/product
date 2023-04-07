import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products :any = [];
    addedProducts:any=[];
    productView:any=[];
    myproductDetails:any=[];
    
    url = 'https://fakestoreapi.com/products';
    constructor(private http:HttpClient,private shared:SharedService ) { }
   
   ngOnInit(): void {
     this.http.get(this.url).subscribe(Response => {
      console.log(Response);
      this.products=Response;
      console.log(this.products);
     })
   }
   addToCart(product:any){
    // alert(product.title);
    // this.addedProducts.push(product);
    // console.log(this.addedProducts);
    this.shared.sendProducts(product);
   }
   removeProducts(index:any){
    alert(index);
    this.addedProducts.splice(index,1);
  }
  View(p:any){
    alert(p.price);
    console.log(p);
    this.productView=p;
    
  }

}


