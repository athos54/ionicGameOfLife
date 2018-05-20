import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tablero } from '../../models/tablero';
import { Helper } from '../../models/helper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tablero:any;
  tiempo:number=1

  constructor(public navCtrl: NavController) {
    this.tablero=new Tablero(15,15)
    // console.log("this.tablero",this.tablero)
    // setInterval(()=>{
    //   this.siguiente()
    // },this.tiempo*1000)

  }

  siguiente(){
    this.tablero.celulas=this.tablero.siguienteEstadoCelulas()
    // console.log("this.tablero.celulas",this.tablero.celulas)
  }
}
