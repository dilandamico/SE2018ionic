import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Corso } from '../../app/models/Corso';
import { CorsoProvider } from '../../providers/corso/corso';

/**
 * Generated class for the CorsoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-corso',
  templateUrl: 'corso.html',
})
export class CorsoPage {
  corso:Corso;
  corsi:Corso[];
  constructor(public alertCtrl : AlertController,private corsoProvider: CorsoProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.corsoProvider.getCorso().subscribe(corsi => {
      this.corsi = corsi;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CorsoPage');
  }

}
