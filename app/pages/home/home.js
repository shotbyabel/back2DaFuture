import {Page, NavController, Modal, Storage, LocalStorage} from 'ionic-angular';//imported NavController login-success
import {LoginSucessPage} from '../login-sucess/login-sucess';
import {ModalLoginInfoPage} from '../modal-login-info/modal-login-info';
import {HomeListPage} from '../home-list/home-list';
import {adTime} from '../../pipes/mypipe';


@Page({
  templateUrl: 'build/pages/home/home.html',
  pipes: [adTime]
})

export class HomePage {//HomePage is in our app.js constructor
  ///***
  static get parameters () {
    return[[NavController]];
  }

  constructor(nav) {
    //1.
    this.currentTime = new Date().getFullYear();
    this.setTitleText();
    this.nav = nav;
    //local storage
    this.local = new Storage(LocalStorage);

    this.local.set('myVarName', "Abel's here yo!");
  }

  //get data back from LocalStorage
  printStoredData(){
    this.local.get('myVarName').then((result) => {
      console.log(result);
    });

  }

  ///***login event handler to navigate 
  login() {
    this.nav.push(LoginSucessPage, {
      //passing data as a string
      myString: "Abel works!"
    });
  }

  //**modal show button
  loginModalInfo() {
    let modalPage = Modal.create(ModalLoginInfoPage);
    //PASSING DATA from Modal.. after close
    modalPage.onDismiss(data => {
      this.receivedData = data.dataOne; //binding to home.html string from modal-login-info.js
    });


    this.nav.present(modalPage);
  }

  //go to the Home-List view

    goList(){
      this.nav.push(HomeListPage);
    
  }


  //2. click even Button function
  timeTravelBtn() {
    this.currentTime = this.getRandomYear(900, 2025);
    this.setTitleText();

  }

  getRandomYear(min, max) {
    //Math.Random function will give # between 1-10 in order to get it btween 1200 n 2100 we need to multiply it
    //for this to work we need to RETURN it! 
    return Math.floor(Math.random() * (max - min + 1)) + min;
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