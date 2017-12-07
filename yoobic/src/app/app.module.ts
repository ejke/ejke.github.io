import { BrowserModule } from '@angular/platform-browser';
	import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ItemDetailsPage } from '../pages/item-details/item-details';
// import { ListPage } from '../pages/list/list';
import { ListDetailPage } from '../pages/list-detail/list-detail';
import { MasterListPage } from '../pages/master-list/master-list';
import { SignInPage } from '../pages/sign-in/sign-in';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    // HelloIonicPage,
    // ItemDetailsPage,
    // ListPage,
    ListDetailPage,
    MasterListPage,
    SignInPage
  ],
  imports: [
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'push'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HelloIonicPage,
    // ItemDetailsPage,
    // ListPage,
    ListDetailPage,
    MasterListPage,
    SignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
