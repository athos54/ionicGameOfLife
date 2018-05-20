import { Helper } from "./helper";

export class Tablero {
  celulas:any=[]

  constructor(numberoDeFilas,numeroDeColumnas) {
    console.log('Hello TableroProvider Provider');
    this.generarTablero(numberoDeFilas,numeroDeColumnas)
  }

  generarTablero(numberoDeFilas,numeroDeColumnas): any {
    for(let i=0;i<numberoDeFilas;i++){
      this.celulas[i]=[]
      for(let j=0;j<numberoDeFilas;j++){
        this.celulas[i][j]=Helper.trueOrFalse()
      }
    }
  }

  siguienteEstadoCelulas(){
    let celulasNuevas=[]
    for(let fila=0; fila<this.celulas.length;fila++){
      celulasNuevas[fila]=[]
      for(let columna=0;columna<this.celulas[fila].length;columna++){
        celulasNuevas[fila][columna] = this.siguienteEstadoCelula(fila,columna)
      }
    }
    return celulasNuevas
  }

  siguienteEstadoCelula(fila,columna){
    let vecinos = this.obtenerEstadoVecinos(fila,columna)
    let vivasAlRededor=0
    for(let i in vecinos){
      if(vecinos[i]=='O') vivasAlRededor++
    }

    if(vivasAlRededor>=3 && vivasAlRededor<=4){
      return 'O'
    }else{
      return 'X'
    }
  }

  obtenerEstadoVecinos(fila,columna){
    let vecinos={
      arriba:null,
      arribaDerecha:null,
      derecha:null,
      abajoDerecha:null,
      abajo:null,
      abajoIzquierda:null,
      izquierda:null,
      arribaIzquierda:null
    }
    let arriba
    if(this.celulas[fila-1] && this.celulas[fila-1][columna]){
      vecinos.arriba = this.celulas[fila-1][columna]
    }else{
      vecinos.arriba='F'
    }
    let arribaDerecha
    if(this.celulas[fila-1] && this.celulas[fila-1][columna+1]){
      vecinos.arribaDerecha = this.celulas[fila-1][columna+1]
    }else{
      vecinos.arribaDerecha='F'
    }
    let derecha
    if(this.celulas[fila] && this.celulas[fila][columna+1]){
      vecinos.derecha = this.celulas[fila][columna+1]
    }else{
      vecinos.derecha='F'
    }
    let abajoDerecha
    if(this.celulas[fila+1] && this.celulas[fila+1][columna+1]){
      vecinos.abajoDerecha = this.celulas[fila+1][columna+1]
    }else{
      vecinos.abajoDerecha='F'
    }
    let abajo
    if(this.celulas[fila+1] && this.celulas[fila+1][columna]){
      vecinos.abajo = this.celulas[fila+1][columna]
    }else{
      vecinos.abajo='F'
    }
    let abajoIzquierda
    if(this.celulas[fila+1] && this.celulas[fila+1][columna-1]){
      vecinos.abajoIzquierda = this.celulas[fila+1][columna-1]
    }else{
      vecinos.abajoIzquierda='F'
    }
    let izquierda
    if(this.celulas[fila] && this.celulas[fila][columna-1]){
      vecinos.izquierda = this.celulas[fila][columna-1]
    }else{
      vecinos.izquierda='F'
    }
    let arribaIzquierda
    if(this.celulas[fila-1] && this.celulas[fila-1][columna-1]){
      vecinos.arribaIzquierda = this.celulas[fila-1][columna-1]
    }else{
      vecinos.arribaIzquierda='F'
    }
    return vecinos
  }

}
