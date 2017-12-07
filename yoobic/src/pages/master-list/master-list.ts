import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListDetailPage } from '../list-detail/list-detail';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-master-list',
  templateUrl: 'master-list.html',
})
export class MasterListPage {

  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterListPage');
  }
  cardTapped(event, post){
    this.navCtrl.push(ListDetailPage, {
      post: post
    });
  }
}
