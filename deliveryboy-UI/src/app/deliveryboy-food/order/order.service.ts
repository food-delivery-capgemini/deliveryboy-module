import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable()
export class OrderService{
    baseUrl="http://localhost:8089";
    constructor (private http:HttpClient){}
    
    // findOrderBycategory(category:any):Observable<Order[]> {
    //   return this.http.get<Order[]>(this.baseUrl+"orders/"+ category);


    // }

    
    findAllOrders():Observable<Order[]>{
      return this.http.get<Order[]>(this.baseUrl +"/findall");
    }
    // findOrderById(orderId:number):Observable<Order>{
    //    return this.http.get<Order>(this.baseUrl+"/order/"+ orderId);
    // }

}