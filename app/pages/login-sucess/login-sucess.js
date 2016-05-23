import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the LoginSucessPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login-sucess/login-sucess.html',
})
export class LoginSucessPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  // goBack() {
  //   this.nav.pop();
  // }

}
