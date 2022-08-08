import { IToken } from './../../shared/interface/IToken';
import { ILogin } from './../../shared/interface/ILogin';
import { AccountService } from './../../shared/services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form_signIn: FormGroup;
  accountToLogin: ILogin = {} as ILogin;

  loginIsValid = false;
  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) {
    this.form_signIn = this.formBuilder.group({
      email: ['alefepdias@gmail.com'],
      senha: ['alefek159']
    })
  }

  ngOnInit() {
  }

 async signIn(){

    this.accountToLogin.email = this.form_signIn.value.email;
    this.accountToLogin.senha = this.form_signIn.value.senha;

    const loading = await this.loadingCtrl.create({
      message: 'Entrando...'
    });

    loading.present();

    this.accountService.login(this.accountToLogin).then(success => {
      this.loginIsValid = false;
      loading.dismiss().then(() => {
        this.navCtrl.navigateForward('/home');
      });

    }).catch(error => {
      loading.dismiss()
      this.loginIsValid = true;
    })
  }

  ionViewWillEnter(){
    this.verifyLoginToken();
  }

  verifyLoginToken() {
    const token: IToken = {} as IToken;
    token.token = window.localStorage.getItem('token');
    const tokenValid = this.accountService.tokenIsValid(token).then(success => {
      if(tokenValid){
        this.navCtrl.navigateForward('/home');
      }
    }).catch(error => {
    });
  }

}
