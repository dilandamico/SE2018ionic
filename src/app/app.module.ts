import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistraStudentePage } from '../pages/registra-studente/registra-studente';
import { HttpClientModule } from '@angular/common/http';
import { StudenteProvider } from '../providers/studente/studente';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule } from 'angularfire2';
import { CiaoPage } from '../pages/ciao/ciao';
import { SegreteriadidatticaPage } from '../pages/segreteriadidattica/segreteriadidattica';
import { CorsoProvider } from '../providers/corso/corso';
import { CorsoPage } from '../pages/corso/corso';

var config = {
  apiKey: "AIzaSyC1KuYsDGX-yOKlYes7z07VldAdiTVrBZ0",
  authDomain: "se2018ionic.firebaseapp.com",
  databaseURL: "https://se2018ionic.firebaseio.com",
  projectId: "se2018ionic",
  storageBucket: "",
  messagingSenderId: "773025381426"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistraStudentePage,
    CiaoPage,
    LoginPage,
    SegreteriadidatticaPage,
    CorsoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistraStudentePage,
    CiaoPage,
    SegreteriadidatticaPage,
    CorsoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudenteProvider,
    CorsoProvider
  ]
})
export class AppModule {}
