import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.page.html',
  styleUrls: ['./sabores.page.scss'],
})
export class SaboresPage implements OnInit {

  tamanhos: any[];
  sabores: any[];
  qtdSabores: number;
  urlBase: string = "http://localhost:3000"

  constructor(public http: HttpClient, public alertCtrl: AlertController) { 
  }

  ngOnInit() {
    this.getTamanhos();
  }
  getTamanhos(){
    this.http.get<any>(`${this.urlBase}/tamanhos`).subscribe(res => {
      this.tamanhos = res;
    }, (err) => {
      console.log(err)
    });
  }

  getSabor(id: number, qtd: number){
    this.qtdSabores = qtd;
    this.http.get<any>(`${this.urlBase}/sabores/${id}`).subscribe(res => {
      this.sabores = res;
    }, (err) => {
      console.log(err)
    });
  }

  validaQtd(e){
    // console.log(e)
    if(!e.check){
      var qtdAtual = this.sabores.filter(element => element.check == true).length;
      if(qtdAtual + 1 > this.qtdSabores){
        console.log('qtd maior');
        this.alertErro("Quantidade ultrapassada",`Quantidade maxima de sabores para este tamanho: ${this.qtdSabores}`);
      }
      // else{
      //   console.log('qtd menor')
      // }
    }
  }

  async alertErro(titulo: string, mensagem: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

}
