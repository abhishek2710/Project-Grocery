import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './supplier.html',
  styleUrls: ['./supplier.page.scss'],
})
export class HomePage{
    constructor(public alertController: AlertController){}
    async presentAlert(){
        const alert = await this.alertController.create({
            header : 'Alert',
            subHeader : 'Subtitle',
            message : 'This is an alert message,',
            buttons : [ok]
        });
        await alert.present();
        let result = await alert.onDidDismiss();
        console.log(result);
    }
}
