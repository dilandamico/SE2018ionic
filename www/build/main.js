webpackJsonp([7],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
 * Generated class for the CiaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CiaoPage = /** @class */ (function () {
    function CiaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CiaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CiaoPage');
    };
    CiaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ciao',template:/*ion-inline-start:"/Users/dilandami/SE2018ionic/src/pages/ciao/ciao.html"*/'<!--\n  Generated template for the CiaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ciao</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dilandami/SE2018ionic/src/pages/ciao/ciao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CiaoPage);
    return CiaoPage;
}());

//# sourceMappingURL=ciao.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorsoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_corso_corso__ = __webpack_require__(215);
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
 * Generated class for the CorsoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CorsoPage = /** @class */ (function () {
    function CorsoPage(alertCtrl, corsoProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.corsoProvider = corsoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CorsoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.corsoProvider.getCorso().subscribe(function (corsi) {
            _this.corsi = corsi;
        });
    };
    CorsoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CorsoPage');
    };
    CorsoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-corso',template:/*ion-inline-start:"/Users/dilandami/SE2018ionic/src/pages/corso/corso.html"*/'<!--\n  Generated template for the CorsoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>corso</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <div class="card" *ngFor="let c of corsi">\n      <div class="card-body">\n        <h3>{{c.nome}}</h3>\n        <p>{{c.facolta}}</p>\n      </div>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/dilandami/SE2018ionic/src/pages/corso/corso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_corso_corso__["a" /* CorsoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CorsoPage);
    return CorsoPage;
}());

//# sourceMappingURL=corso.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ciao_ciao__ = __webpack_require__(155);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, fireAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.fireAuth = fireAuth;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signInUser = function () {
        var _this = this;
        console.log(this.email.value, this.password.value);
        this.fireAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ciao_ciao__["a" /* CiaoPage */]);
            _this.showAlert('Successfull logged in');
        }).catch(function (err) {
            console.log(err.message);
            _this.showAlert(err.message);
        });
    };
    LoginPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'login!',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/dilandami/SE2018ionic/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list insert>\n\n    <ion-item>\n      <ion-label>email      </ion-label>\n        <ion-input type = "email" #email>      \n        </ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>password         </ion-label>\n          <ion-input type = "password" #password>      \n          </ion-input>\n    </ion-item>\n\n  </ion-list>\n  <button ion-button full color=\'light\' (click)="signInUser()">Sign In</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dilandami/SE2018ionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegreteriadidatticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registra_studente_registra_studente__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__corso_corso__ = __webpack_require__(156);
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
 * Generated class for the SegreteriadidatticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SegreteriadidatticaPage = /** @class */ (function () {
    function SegreteriadidatticaPage(navCtrl, nav) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.items = [];
        this.items = [
            {
                'title': 'Registra Studente',
                'icon': 'person',
                'color': '#E63135'
            },
            {
                'title': 'CSS3',
                'icon': 'css3',
                'description': 'The latest version of cascading stylesheets - the styling language of the web!',
                'color': '#0CA9EA'
            },
            {
                'title': 'HTML5',
                'icon': 'html5',
                'description': 'The latest version of the web\'s markup language.',
                'color': '#F46529'
            },
            {
                'title': 'JavaScript',
                'icon': 'javascript',
                'description': 'One of the most popular programming languages on the Web!',
                'color': '#FFD439'
            },
            {
                'title': 'Sass',
                'icon': 'sass',
                'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
                'color': '#CE6296'
            },
            {
                'title': 'NodeJS',
                'icon': 'nodejs',
                'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
                'color': '#78BD43'
            },
            {
                'title': 'Python',
                'icon': 'python',
                'description': 'A clear and powerful object-oriented programming language!',
                'color': '#3575AC'
            },
            {
                'title': 'Markdown',
                'icon': 'markdown',
                'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
                'color': '#412159'
            },
            {
                'title': 'Tux',
                'icon': 'tux',
                'description': 'The official mascot of the Linux kernel!',
                'color': '#000'
            },
        ];
    }
    SegreteriadidatticaPage.prototype.registrastudente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registra_studente_registra_studente__["a" /* RegistraStudentePage */]);
    };
    SegreteriadidatticaPage.prototype.corso = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__corso_corso__["a" /* CorsoPage */]);
    };
    SegreteriadidatticaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <ion-title>Segreteria Didattica</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor=\"let item of items\" (click)=\"registrastudente()\" icon-start>\n      <ion-icon [name]=\"'logo-' + item.icon\" [ngStyle]=\"{'color': item.color}\" item-start></ion-icon>\n      {{ item.title }}\n    </button>\n  </ion-list>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SegreteriadidatticaPage);
    return SegreteriadidatticaPage;
}());

//# sourceMappingURL=segreteriadidattica.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistraStudentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_studente_studente__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(85);
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
 * Generated class for the RegistraStudentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistraStudentePage = /** @class */ (function () {
    function RegistraStudentePage(alertCtrl, studenteProvider, navCtrl, navParams, fire, fireAuth) {
        this.alertCtrl = alertCtrl;
        this.studenteProvider = studenteProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.fireAuth = fireAuth;
    }
    RegistraStudentePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistraStudentePage');
    };
    RegistraStudentePage.prototype.cercaStudente = function () {
        var _this = this;
        this.studenteProvider.getStudente().subscribe(function (studenti) {
            _this.studenti = studenti;
        });
    };
    RegistraStudentePage.prototype.studenteById = function (id) {
        var _this = this;
        console.log(id);
        this.studenteProvider.getStudenteById(id).subscribe(function (studenti) {
            _this.studenti = studenti;
        });
    };
    RegistraStudentePage.prototype.addStudente = function (name, surname, email, password, data, indirizzo, matricola, idcorso) {
        var _this = this;
        this.fireAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(function (data) {
            console.log(data);
            _this.showAlert('Registrazione eseguita con successo');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }).catch(function (err) {
            console.log(err.message);
            _this.showAlert(err.message);
        });
        this.studenteProvider.saveStudente({ name: name, surname: surname, email: email, password: password, data: data, indirizzo: indirizzo, matricola: matricola, idcorso: idcorso }).subscribe(function (studente) {
            console.log(_this.studente);
        });
    };
    RegistraStudentePage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Registrazione!',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('name'),
        __metadata("design:type", Object)
    ], RegistraStudentePage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('surname'),
        __metadata("design:type", Object)
    ], RegistraStudentePage.prototype, "surname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], RegistraStudentePage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], RegistraStudentePage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('data'),
        __metadata("design:type", Object)
    ], RegistraStudentePage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('indirizzo'),
        __metadata("design:type", Object)
    ], RegistraStudentePage.prototype, "indirizzo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('matricola'),
        __metadata("design:type", Object)
    ], RegistraStudentePage.prototype, "matricola", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('idcorso'),
        __metadata("design:type", Object)
    ], RegistraStudentePage.prototype, "idcorso", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('id'),
        __metadata("design:type", Object)
    ], RegistraStudentePage.prototype, "id", void 0);
    RegistraStudentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registra-studente',template:/*ion-inline-start:"/Users/dilandami/SE2018ionic/src/pages/registra-studente/registra-studente.html"*/'\n\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      Studente\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="studente">\n      <ion-segment-button value="registrastudente">\n        Registra Studente\n      </ion-segment-button>\n      <ion-segment-button value="modificastudente">\n        Modifica Studente\n      </ion-segment-button>\n      <ion-segment-button value="cancellastudente">\n        Cancella Studente\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="studente">\n    <ion-list *ngSwitchCase="\'registrastudente\'">\n          <ion-item>\n            <ion-label>name      </ion-label>\n              <ion-input type = "text" #name>      \n              </ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label>surname         </ion-label>\n                <ion-input type = "text" #surname>      \n                </ion-input>\n\n          </ion-item>\n          <ion-item>\n            <ion-label>email         </ion-label>\n              <ion-input type = "email" #email>      \n              </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>password         </ion-label>\n              <ion-input type = "password" #password>      \n              </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>data         </ion-label>\n              <ion-input type = "date" data-ng-pattern="YYYY-MM-DD" #data>      \n              </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>matricola         </ion-label>\n              <ion-input type = "number" #matricola>      \n              </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>indirizzo         </ion-label>\n              <ion-input type = "text" #indirizzo>      \n              </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>idcorso         </ion-label>\n              <ion-input type = "number" #idcorso>      \n              </ion-input>\n          </ion-item>\n          \n        <button ion-button full color=\'light\' (click)="addStudente(name.value,surname.value,email.value,password.value,data.value,indirizzo.value,matricola.value, idcorso.value)">Registra studente</button>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'modificastudente\'">\n        <ion-item>\n            <ion-label>id         </ion-label>\n              <ion-input type = "number" #id>      \n              </ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>name      </ion-label>\n                <ion-input type = "text" #name>      \n                </ion-input>\n            </ion-item>\n  \n            <ion-item>\n                <ion-label>surname         </ion-label>\n                  <ion-input type = "text" #surname>      \n                  </ion-input>\n            </ion-item>\n            <button ion-button full color=\'light\' (click)="studenteById(id.value)">Cerca studente</button>\n            <ion-item>\n                <ion-list>\n                    <ion-list-header>\n                      studente\n                    </ion-list-header>\n                    <a ion-item (click)="openModal({charNum: 0})" *ngFor="let s of studenti">\n                      <h3>{{s.name}}</h3>\n                      <h3>{{s.surname}}</h3>\n                    </a>\n                  </ion-list>\n                </ion-item>\n            </ion-list>\n\n      <ion-list *ngSwitchCase="\'cancellastudente\'">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-kitten-1.jpg">\n            </ion-thumbnail>\n            <h2>Luna</h2>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-kitten-3.jpg">\n            </ion-thumbnail>\n            <h2>Milo</h2>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-kitten-4.jpg">\n            </ion-thumbnail>\n            <h2>Bandit</h2>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-kitten-2.jpg">\n            </ion-thumbnail>\n            <h2>Nala</h2>\n          </ion-item>\n        </ion-list>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dilandami/SE2018ionic/src/pages/registra-studente/registra-studente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_studente_studente__["a" /* StudenteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], RegistraStudentePage);
    return RegistraStudentePage;
}());

//# sourceMappingURL=registra-studente.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ciao/ciao.module": [
		694,
		6
	],
	"../pages/corso/corso.module": [
		695,
		5
	],
	"../pages/home/home.module": [
		696,
		4
	],
	"../pages/login/login.module": [
		697,
		3
	],
	"../pages/menu/menu.module": [
		699,
		0
	],
	"../pages/registra-studente/registra-studente.module": [
		698,
		2
	],
	"../pages/segreteriadidattica/segreteriadidattica.module": [
		700,
		1
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
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorsoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CorsoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
var CorsoProvider = /** @class */ (function () {
    function CorsoProvider(http) {
        this.http = http;
        this.corsogetUrl = 'http://localhost:8080/SE2018/corso/getAll';
        console.log('Hello CorsoProvider Provider');
    }
    CorsoProvider.prototype.getCorso = function () {
        return this.http.get(this.corsogetUrl);
    };
    CorsoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CorsoProvider);
    return CorsoProvider;
}());

//# sourceMappingURL=corso.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudenteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StudenteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
var StudenteProvider = /** @class */ (function () {
    function StudenteProvider(http) {
        this.http = http;
        this.studentesaveUrl = 'http://localhost:8080/SE2018/studente/save';
        this.studentegetUrl = 'http://localhost:8080/SE2018/studente/getAll';
        this.studentegetByIdUrl = 'http://localhost:8080/SE2018/studente/getById';
        console.log('Hello StudenteProvider Provider');
    }
    StudenteProvider.prototype.saveStudente = function (studente) {
        return this.http.post(this.studentesaveUrl, studente, { headers: headers });
    };
    StudenteProvider.prototype.getStudente = function () {
        return this.http.get(this.studentegetUrl);
    };
    StudenteProvider.prototype.getStudenteById = function (id) {
        return this.http.get(this.studentegetByIdUrl + '/' + id);
    };
    StudenteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StudenteProvider);
    return StudenteProvider;
}());

//# sourceMappingURL=studente.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_registra_studente_registra_studente__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_studente_studente__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ciao_ciao__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_segreteriadidattica_segreteriadidattica__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_corso_corso__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_corso_corso__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var config = {
    apiKey: "AIzaSyC1KuYsDGX-yOKlYes7z07VldAdiTVrBZ0",
    authDomain: "se2018ionic.firebaseapp.com",
    databaseURL: "https://se2018ionic.firebaseio.com",
    projectId: "se2018ionic",
    storageBucket: "",
    messagingSenderId: "773025381426"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_registra_studente_registra_studente__["a" /* RegistraStudentePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ciao_ciao__["a" /* CiaoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_segreteriadidattica_segreteriadidattica__["a" /* SegreteriadidatticaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_corso_corso__["a" /* CorsoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ciao/ciao.module#CiaoPageModule', name: 'CiaoPage', segment: 'ciao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/corso/corso.module#CorsoPageModule', name: 'CorsoPage', segment: 'corso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registra-studente/registra-studente.module#RegistraStudentePageModule', name: 'RegistraStudentePage', segment: 'registra-studente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/segreteriadidattica/segreteriadidattica.module#SegreteriadidatticaPageModule', name: 'SegreteriadidatticaPage', segment: 'segreteriadidattica', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_registra_studente_registra_studente__["a" /* RegistraStudentePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ciao_ciao__["a" /* CiaoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_segreteriadidattica_segreteriadidattica__["a" /* SegreteriadidatticaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_corso_corso__["a" /* CorsoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_studente_studente__["a" /* StudenteProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_corso_corso__["a" /* CorsoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dilandami/SE2018ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dilandami/SE2018ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__segreteriadidattica_segreteriadidattica__ = __webpack_require__(158);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.segreteriadidattica = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__segreteriadidattica_segreteriadidattica__["a" /* SegreteriadidatticaPage */]);
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/dilandami/SE2018ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic App SE\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<button ion-button full color=\'light\' (click)="segreteriadidattica()">segreteria didattica</button>\n<button ion-button full color=\'light\' (click)="login()">Login</button>\n<button ion-button full color=\'light\' (click)="menu()">menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/dilandami/SE2018ionic/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map