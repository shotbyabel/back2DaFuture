import {Page, NavController, NavParams, ViewController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/modal-login-info/modal-login-info.html',
})

export class ModalLoginInfoPage {
  static get parameters() {
    return [[NavController], [NavParams], [ViewController]];
  }

  constructor(nav, navParams, vc) {
    this.nav = nav;
    this.navParams = navParams; //make them available to class
    this.vc = vc
  }

  //PASS DATA thru Modal...
  closeModal() {

    let data = {
      dataOne: "Here comes dat boi"
    };

    this.vc.dismiss(data);

  }


}