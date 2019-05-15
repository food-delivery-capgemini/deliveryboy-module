import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DeliveryboyLoginComponent } from './deliveryboy-login.component';
import { DeliveryboyRegistrationComponent } from './deliveryboy-registration.component';
import { RouterModule } from '@angular/router';
import { deliveryboyRoutes } from './deliveryboy.routes';
import { DeliveryboyService } from './deliveryboy.service';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations:[DeliveryboyLoginComponent, DeliveryboyRegistrationComponent,],
    imports:[BrowserModule,RouterModule.forChild( deliveryboyRoutes),FormsModule,HttpClientModule],
    exports:[DeliveryboyLoginComponent,DeliveryboyRegistrationComponent,RouterModule],
    providers:[DeliveryboyService]
})
export class DeliveryboyModule {

}