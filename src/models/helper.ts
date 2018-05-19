export class Helper {

  constructor() {}

  public static trueOrFalse():string {
    if (((Math.floor(Math.random() * 2) + 1)-1)==0){
      return 'X'
    }else{
      return 'O'
    }
  }

}
