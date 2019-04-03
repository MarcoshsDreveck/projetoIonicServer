import { Component, OnInit } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string;
  password: string;
  urlBase: string = "http://localhost:3000"

  constructor(public router: Router, public http: HttpClient, public alertCtrl: AlertController) { }
 
  login(): void{
    var param = {
      userName: this.userName,
      password: this.password
    };
    
    this.http.post<any>(`${this.urlBase}/logon`, param).subscribe(res => {
      console.log(res.token);
      if(res.token)
        this.router.navigate(['/home']);
    }, (err) => {
      this.alertErro(err.error.AditionalInfo, err.error.ApiError);
    });
  }

  async alertErro(mensagem: string, errorCode: string) {
    const alert = await this.alertCtrl.create({
      header: 'Senha e/ou usuário inválido',
      subHeader: `Erro código ${errorCode}`,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {

  }

}
