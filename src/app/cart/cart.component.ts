import { ApplicationRef, Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products:any=[];
totalPrice=0;
qty:any= 1;
cartShow: boolean = false;


constructor(private shared:SharedService){}

  ngOnInit(): void {
    this.shared.currentData.subscribe(res=>{
      // console.log(res);
     if( res != null)
      this.products.push(res);
      // console.log(res)
      this.totalPrice= this.products.reduce((acc:any,curr:any)=>acc+curr.price,0);
     
    })
    this.totalPrice.toFixed(2);
  }
  openCart(){

    this.cartShow = true;
  
  }
  closeCart(){

    this.cartShow = false;
  
  }
  delProduct(index:any){
    this.products.splice(index,1);
    this.totalPrice= this.products.reduce((acc:any,curr:any)=>acc+curr.price,0);
  }
  
}

