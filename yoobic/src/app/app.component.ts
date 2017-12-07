import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { MasterListPage } from '../pages/master-list/master-list';
import { SignInPage } from '../pages/sign-in/sign-in';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = SignInPage;
  pages: Array<{title: string, icon: string, component: any}>;
  // icons: string;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();


    // set our app's pages
    this.pages = [
      { title: 'Dashboard', icon: 'image', component: MasterListPage },
      { title: 'Photos', icon: 'boat', component: MasterListPage },
      { title: 'Available Missions', icon: 'image', component: MasterListPage },
      { title: 'My Missions', icon: 'boat', component: MasterListPage },
      // { title: 'Chat', icon: 'image', component: MasterListPage },
      { title: 'Sign out', icon: 'boat', component: SignInPage },
      { title: '', icon: 'power',  component: SignInPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
