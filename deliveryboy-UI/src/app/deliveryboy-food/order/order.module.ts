import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { OrderComponent } from './order.component';
import { orderRoutes } from './order.routes';
import { OrderService } from './order.service';
import { FormsModule} from '@angular/forms';




@NgModule({
    declarations:[
        OrderComponent
        ],
    
    imports:[
        FormsModule,
        BrowserModule,
            RouterModule.forChild(orderRoutes),FormsModule,
            HttpClientModule

        ],
        providers:[
            OrderService
        ],
        exports:[
            OrderComponent,       
            RouterModule
    ]
})
export class OrderModule{

}
