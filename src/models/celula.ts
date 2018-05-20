import { Helper } from "./helper";

export class Celula {
  estado:string=''

  constructor(estado='F') {
    estado=='F' ? this.estado=Helper.trueOrFalse() : this.establecerEstado(estado)
  }

  establecerEstado(estado){
    this.estado=estado
  }

}
