import { Helper } from "./helper";
import { Celula } from "./celula";

export class Tablero {
  celulas:any=[]

  constructor(numberoDeFilas,numeroDeColumnas) {
    this.generarTablero(numberoDeFilas,numeroDeColumnas)
  }

  generarTablero(numberoDeFilas,numeroDeColumnas): any {
    for(let i=0;i<numberoDeFilas;i++){
      this.celulas[i]=[]
      for(let j=0;j<numberoDeFilas;j++){
        this.celulas[i][j]=new Celula();
      }
    }
  }

  siguienteEstadoCelulas(){
    let celulasNuevas=[]
    for(let fila=0; fila<this.celulas.length;fila++){
      celulasNuevas[fila]=[]
      for(let columna=0;columna<this.celulas[fila].length;columna++){
        celulasNuevas[fila][columna] = new Celula(this.siguienteEstadoCelula(fila,columna))
      }
    }
    return celulasNuevas
  }

  siguienteEstadoCelula(fila,columna){
    let vecinos = this.obtenerEstadoVecinos(fila,columna)
    let vivasAlRededor=0
    for(let vecino in vecinos){
      if(vecinos[vecino].estado=='O') vivasAlRededor++
    }

    if(vivasAlRededor>=3 && vivasAlRededor<=4){
      return 'O'
    }else{
      return 'X'
    }
  }

  obtenerEstadoVecinos(fila,columna){
    let vecinos={
      arriba:{ estado:null, fila: fila-1, columna: columna },
      arribaDerecha:{ estado:null, fila: fila-1, columna: columna+1 },
      derecha:{ estado:null, fila: fila, columna: columna+1 },
      abajoDerecha:{ estado:null, fila: fila+1, columna: columna+1 },
      abajo:{ estado:null, fila: fila+1, columna: columna },
      abajoIzquierda:{ estado:null, fila: fila+1, columna: columna-1 },
      izquierda:{ estado:null, fila: fila, columna: columna-1 },
      arribaIzquierda:{ estado:null, fila: fila-1, columna: columna-1 }
    }

    for(let vecino in vecinos){
      vecinos[vecino].estado=this.estadoVecino(fila,columna,vecinos[vecino])
    }

    return vecinos

  }

  estadoVecino(fila,columna,vecino){
    if(this.celulas[vecino.fila] && this.celulas[vecino.fila][vecino.columna]){
      return this.celulas[vecino.fila][vecino.columna].estado
    }

  }

}
