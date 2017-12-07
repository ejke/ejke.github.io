import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 // import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html',
})
export class ListDetailPage {
  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDetailPage');
  }
}
