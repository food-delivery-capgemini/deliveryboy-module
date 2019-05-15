//import { Component, OnInit } from '@angular/core';
import { Deliveryboy } from './deliveryboy';
import { DeliveryboyService } from './deliveryboy.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
    templateUrl:"./deliveryboy-registration.component.html",
    selector:" deliveryboy-registration"
})
export class DeliveryboyRegistrationComponent implements OnInit {
  deliveryboy:Deliveryboy;
  constructor(private deliveryboyService: DeliveryboyService, private router:Router){}
  ngOnInit(){
      this.deliveryboy= new Deliveryboy();

}

registrationDetailsOfDeliveryboy(){
  alert("Registration successfull");
    console.log(this.deliveryboy);
  this.deliveryboyService.registrationDetailsOfDeliveryboy(this.deliveryboy).subscribe((data)=>{
       console.log("success");
       console.log(data);
       if(data!=null){
          alert("done");
          this.router.navigate(['/login']); 
          
       }
  });

}
}





