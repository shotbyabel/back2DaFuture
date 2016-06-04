import {Page, NavController, Storage, SqlStorage} from 'ionic-angular';
import {Http} from '@angular/http';

/*
  Generated class for the HomeListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/home-list/home-list.html',
})
export class HomeListPage {
  static get parameters() {
    return [[NavController], [Http]];
  }

  constructor(nav, http) {
    this.nav = nav;
    this.http = http;

    this.http.get("http://api.randomuser.me/?results=10").subscribe(data => {//like a promise.. asynchronous
          console.log("got JSON data");
          this.friends = JSON.parse(data._body).results;

        }, error => {
      console.log("Error getting data");
    });
    //get SQL Lite Data
    this.storage = new Storage(SqlStorage, {name: 'myLittleDB'});

    this.storage.set('mySQLiteVar', "This is store using SQL Lite"); 

    //LIST
    // this.friends = [{
    //     title: "Bernie"
    //   }, {
    //     title: "Kardash"
    //   }, {
    //     title: "Maiuuu"
    //   }, {
    //     title: "Iiris"
    //   }, {
    //     title: "Rob"
    //   }, {
    //     title: "Gettu"
    //   },{
    //     title: "Kerli"
    //   }, {
    //     title: "Susanita"
    //   }, {
    //     title: "Spooker"
    //   }, {
    //     title: "Gatos"
    //   }, {
    //     title: "CoolGuy"
    //   },

    // ]

  }
//print SQL Lite Data
printSQLdata(){
  this.storage.get('mySQLiteVar').then((result) => {
    // console.log(result);
    this.mySQLiteData = result
  });

}


//list event handler
itemClicked(event, item){
  console.log(item.name.first);

}
//delete item
  removeItem(item) {
    //set for loop logic
    for (this.i = 0; this.i < this.friends.length; this.i++) {
      //check
      if (this.friends[this.i] == item) {
        this.friends.splice(this.i, 1);
      }
    }
  }
}
