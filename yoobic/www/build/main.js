webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http } from '@angular/http';

var ListDetailPage = (function () {
    function ListDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.post = navParams.get('post');
    }
    ListDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListDetailPage');
    };
    ListDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-detail',template:/*ion-inline-start:"/home/test/Documents/code/IonicYoobicTest/src/pages/list-detail/list-detail.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Post</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item  *ngIf="post">\n   <ion-avatar item-start>\n     <img [src]="post.data.thumbnail">\n   </ion-avatar>\n   <h1>{{post.data.author}}</h1>\n </ion-item>\n\n  <ion-item  *ngIf="post">\n    <img class="full_width" [src]="post.data.url"/>\n </ion-item>\n  <!-- <ion-item  *ngIf="post"> -->\n    <h4 padding marging>{{post.data.title}}</h4>\n <!-- </ion-item> -->\n\n  <p *ngIf="post">Url: {{post.data.domain}}</p>\n  <p *ngIf="post">Created: {{post.data.created_utc}}</p>\n  <p *ngIf="post">Score: {{post.data.score}}</p>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/test/Documents/code/IonicYoobicTest/src/pages/list-detail/list-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListDetailPage);
    return ListDetailPage;
}());

//# sourceMappingURL=list-detail.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_list_master_list__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = (function () {
    function SignInPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.signInTapped = function (event) {
        // this.navCtrl.push(MasterListPage);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__master_list_master_list__["a" /* MasterListPage */]);
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/home/test/Documents/code/IonicYoobicTest/src/pages/sign-in/sign-in.html"*/'<!-- <ion-header></ion-header> -->\n\n<ion-content padding class="greybg signin">\n\n  <div class="signin_img"></div>\n\n  <h1 text-center>Sign in</h1>\n\n  <ion-item>\n     <ion-icon class="sub" name="ios-mail-outline" item-left></ion-icon>\n     <ion-input type="email" placeholder="E-mail" ngControl="email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n     <ion-icon class="sub" name="ios-lock-outline" item-left></ion-icon>\n    <ion-input type="password" placeholder="Password" ngControl="password"></ion-input>\n  </ion-item>\n\n  <p text-right>\n    <sup>forgot password?</sup>\n  </p>\n\n\n  <p text-center>Sign in with<br><span class="facebook">F</span></p>\n\n\n  <ion-row>\n     <ion-col> </ion-col>\n     <ion-col col-auto>\n       <button ion-button round large outline >Sign up</button>\n       <button ion-button round large type="submit" (click)="signInTapped($event)">Sign in</button>\n     </ion-col>\n     <ion-col></ion-col>\n   </ion-row>\n\n   <p text-center>\n     <a href="#" >Terms and Conditions</a>\n   </p>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/test/Documents/code/IonicYoobicTest/src/pages/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/list-detail/list-detail.module": [
		275,
		2
	],
	"../pages/master-list/master-list.module": [
		276,
		1
	],
	"../pages/sign-in/sign-in.module": [
		277,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_detail_list_detail__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_master_list_master_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_in_sign_in__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ItemDetailsPage } from '../pages/item-details/item-details';
// import { ListPage } from '../pages/list/list';





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                // HelloIonicPage,
                // ItemDetailsPage,
                // ListPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_list_detail_list_detail__["a" /* ListDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_master_list_master_list__["a" /* MasterListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_in_sign_in__["a" /* SignInPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    menuType: 'push'
                }, {
                    links: [
                        { loadChildren: '../pages/list-detail/list-detail.module#ListDetailPageModule', name: 'ListDetailPage', segment: 'list-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/master-list/master-list.module#MasterListPageModule', name: 'MasterListPage', segment: 'master-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                // HelloIonicPage,
                // ItemDetailsPage,
                // ListPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_list_detail_list_detail__["a" /* ListDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_master_list_master_list__["a" /* MasterListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_in_sign_in__["a" /* SignInPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_master_list_master_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sign_in_sign_in__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    // icons: string;
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_sign_in_sign_in__["a" /* SignInPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Dashboard', icon: 'image', component: __WEBPACK_IMPORTED_MODULE_2__pages_master_list_master_list__["a" /* MasterListPage */] },
            { title: 'Photos', icon: 'boat', component: __WEBPACK_IMPORTED_MODULE_2__pages_master_list_master_list__["a" /* MasterListPage */] },
            { title: 'Available Missions', icon: 'image', component: __WEBPACK_IMPORTED_MODULE_2__pages_master_list_master_list__["a" /* MasterListPage */] },
            { title: 'My Missions', icon: 'boat', component: __WEBPACK_IMPORTED_MODULE_2__pages_master_list_master_list__["a" /* MasterListPage */] },
            // { title: 'Chat', icon: 'image', component: MasterListPage },
            { title: 'Sign out', icon: 'boat', component: __WEBPACK_IMPORTED_MODULE_3__pages_sign_in_sign_in__["a" /* SignInPage */] },
            { title: '', icon: 'power', component: __WEBPACK_IMPORTED_MODULE_3__pages_sign_in_sign_in__["a" /* SignInPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/test/Documents/code/IonicYoobicTest/src/app/app.html"*/'<ion-menu side="left" [content]="content">\n  <ion-content class="greybg menu">\n\n    <ion-list>\n\n      <div class="menu_img">\n        <img width="30rem" src="../assets/imgs/logo.png" alt="" />\n      </div>\n\n      <button ion-button clear color="dark" class="menu_btn" *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon *ngIf="p.icon" name="{{p.icon}}" item-left></ion-icon>\n        <span padding-left *ngIf="p.title">{{p.title}}</span>\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/test/Documents/code/IonicYoobicTest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_detail_list_detail__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MasterListPage = (function () {
    function MasterListPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.data.children;
        });
    }
    MasterListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MasterListPage');
    };
    MasterListPage.prototype.cardTapped = function (event, post) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_detail_list_detail__["a" /* ListDetailPage */], {
            post: post
        });
    };
    MasterListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-master-list',template:/*ion-inline-start:"/home/test/Documents/code/IonicYoobicTest/src/pages/master-list/master-list.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Logo</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name=\'options\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n  <ion-row text-center text-uppercase>\n    <ion-col>\n      Missions\n    </ion-col>\n    <ion-col>\n      Notes\n    </ion-col>\n    <ion-col>\n      Requests\n    </ion-col>\n  </ion-row>\n </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class="greybg">\n\n  <ion-card *ngFor="let post of posts" (click)="cardTapped($event, post)" >\n\n    <ion-item>\n\n     <ion-avatar item-start>\n       <img [src]="post.data.thumbnail">\n     </ion-avatar>\n\n     <ion-row>\n       <ion-col>\n         <h2>{{post.data.author}}</h2>\n         <p>{{post.data.domain}}</p>\n       </ion-col>\n       <ion-col text-right>\n         <h2>{{post.data.created_utc}}</h2>\n         <p>Score: {{post.data.score}}</p>\n       </ion-col>\n     </ion-row>\n\n   </ion-item>\n\n    <img [src]="post.data.url"/>\n\n    <ion-card-content>\n      <p>\n      {{post.data.title}}\n      </p>\n    </ion-card-content>\n    \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/test/Documents/code/IonicYoobicTest/src/pages/master-list/master-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], MasterListPage);
    return MasterListPage;
}());

//# sourceMappingURL=master-list.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map