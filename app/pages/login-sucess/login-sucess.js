import {Page, NavController, NavParams} from 'ionic-angular';

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
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
    this.navParams = navParams;//make them available to class
    this.btnText = this.navParams.get('myString');


  }

  goBack() {
    this.nav.pop();
  }

}
