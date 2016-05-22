//1*import
import {Pipe} from '@angular/core';


//2*decorator
@Pipe({
  name: 'adTime'
})

//3*class function: export pipe class
export class adTime {
  //pipe class method
  transform (value, args){
    //1st instance
    return value + ' AD';//pipe receives value we send, spits out same value 
  }
}