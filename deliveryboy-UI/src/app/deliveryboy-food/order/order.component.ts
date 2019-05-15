import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from './order.service';
import { forEach } from '@angular/router/src/utils/collection';



@Component({
    templateUrl:"./order.component.html",
   
})
export class OrderComponent implements OnInit{
    orders:Order[];
  // orders:Order;

    constructor(private orderService:OrderService,
        private route:ActivatedRoute){}

        ngOnInit():void {
           // this.orders=new Order;
           this.orderService.findAllOrders().subscribe((data)=>{
           
            //    console.log(data[0].paymentType)
            //   console.log(this.orders._id=data[0]._id);
            //    console.log( this.orders.price=data[0].price);
            //  this.orders.paymentType=data[0].paymentType;
           this.orders=data;
            console.log(this.orders)
                
            });
        }

    

}