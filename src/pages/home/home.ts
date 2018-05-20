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
  tiempo:number=500
  interval:any=null

  constructor(public navCtrl: NavController) {
    this.tablero=new Tablero(19, 22)
  }

  botonSiguiente(){
    this.pararAutomatico()
    this.siguiente()
  }

  siguiente(){
    this.tablero.celulas=this.tablero.siguienteEstadoCelulas()
  }

  pararAutomatico(){
    clearInterval(this.interval)
    this.interval=null
  }

  automatico(){
    if(this.interval==null){
      this.siguiente()
      this.interval = setInterval(()=>{
        this.siguiente()
      },this.tiempo)
    }else{
      this.pararAutomatico()
      this.automatico()
    }
  }


}
