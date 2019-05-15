import {Routes}from "@angular/router";
import { DeliveryboyRegistrationComponent } from './deliveryboy-registration.component';
import { DeliveryboyLoginComponent } from './deliveryboy-login.component';


export const deliveryboyRoutes: Routes =[
    {path: "signup", component: DeliveryboyRegistrationComponent},
    {path: "login",component: DeliveryboyLoginComponent}
];