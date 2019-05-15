import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ResourceNotFoundComponent } from './notfound.component';

import { from } from 'rxjs';
import { OrderComponent } from './deliveryboy-food/order/order.component';
import { OrderService } from './deliveryboy-food/order/order.service';
import { OrderModule } from './deliveryboy-food/order/order.module';
import { DeliveryboyModule } from './deliveryboy-food/deliveryboy/deliveryboy.module';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ResourceNotFoundComponent
  ],
  providers: [
    OrderService
  ],
  exports:[
    OrderComponent,
    RouterModule
],
  bootstrap: [AppComponent],
  imports: [
    DeliveryboyModule,
    OrderModule,
    RouterModule.forRoot(appRoutes)]
})
export class AppModule {
 
 }
