//1*import
import {Pipe} from 'angular2/core';

//2*decorator
@Pipe({
  name: 'adAdder'
})

//3*class function: export pipe class
export class adAdder {
  //pipe class method
  transform (value, args){
    //1st instance
    return value;//pipe receives value we send, spits out same value 
  }
}