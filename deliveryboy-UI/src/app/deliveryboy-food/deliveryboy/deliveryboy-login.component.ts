import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryboyService } from './deliveryboy.service';
import { Deliveryboy } from './deliveryboy';




@Component({
    templateUrl: "./deliveryboy-login.component.html",
    selector: "deliveryboy-login"
})
export class DeliveryboyLoginComponent implements OnInit {
    //     invalidLogin = false;

    //     constructor(private router: Router,

    //       private deliveryboyService : DeliveryboyService) { }

    //       ngOnInit() {
    //       }

    //       checkLogin() {
    //         let email = (<HTMLInputElement>document.getElementById("email")).value;
    //         let password= (<HTMLInputElement>document.getElementById("password")).value;

    //         this.deliveryboyService.logInDetailsOfDeliveryboy(email,password).subscribe((data)=>{
    //           if(data!=null) {

    //             this.router.navigate(['/home']);
    //           } 
    //           else
    //           this.invalidLogin = true;

    //         })

    //       }

    email: string;
    password: string;
    deliveryboy: Deliveryboy;
    constructor(
        private route: Router,
        private deliveryboyService: DeliveryboyService) { }

    ngOnInit():void{

        
    }

    checkLogin() {

        alert(this.email)
        alert(this.password)

        this.deliveryboyService.getUserByEmail(this.email).subscribe((data) => {
            
            this.deliveryboy = data;
            //alert(this.deliveryboy)
        });


        if (this.deliveryboy != null) {
            if (this.deliveryboy.password == this.password) {
                //setting session storage
               sessionStorage.setItem("deliveryboy", JSON.stringify(this.deliveryboy));
                console.log(JSON.parse(sessionStorage.getItem("deliveryboy")));

                this.route.navigate(['/order']);
           }else{alert("please enter valid password")}

        } else { alert('please enter valid details') }

    }

}


   


