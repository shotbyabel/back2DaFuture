import {Page} from 'ionic-angular';
import {adTime} from '../../pipes/mypipe';


@Page({
  templateUrl: 'build/pages/home/home.html',
  pipes: [adTime]
})

export class HomePage {//HomePage is in our app.js constructor
  constructor() {
    //1.
    this.currentTime = new Date().getFullYear();
    this.setTitleText();
  }


  //2. click even Button function
  timeTravelBtn() {
    this.currentTime = this.getRandomYear(900, 2025);
    this.setTitleText();

  }

  getRandomYear(min, max) {
    //Math.Random function will give # between 1-10 in order to get it btween 1200 n 2100 we need to multiply it
    //for this to work we need to RETURN it! 
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  setTitleText() {
    if (this.titleChanged) {
      this.cardTitle = "Traveling to...";
    } else {
      this.cardTitle = "Current Year is..";
      this.titleChanged = true;
    }
  }

}
