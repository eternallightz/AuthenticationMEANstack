import { LogsService } from './../logs.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: '',
    password: ''
  };
  captcha = false;
  captchaDanger = false;
  constructor(private _auth: AuthService, private _router: Router, private _logsService: LogsService) { }
  invalidLogin = false;
  ngOnInit() {
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this._logsService.actions.push('Пользователь ввел капчу');
    this.captcha = true;
  }
  isCaptchaCorrect() {
    if (this.captcha === true) {
      this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          if (this.loginUserData.email === 'owner@mail.com' && this.loginUserData.password === 'ow') {
            this._logsService.actions.push('Вошел хозяин сервиса');
            this._router.navigate(['/owner']);
          } else if (this.loginUserData.email === 'superadm@mail.com' && this.loginUserData.password === 'sa') {
            this._logsService.actions.push('Пользователь вошел в систему с правами суперадминистратора');
            this._router.navigate(['/superadm']);
          } else if (this.loginUserData.email === 'adm@mail.com' && this.loginUserData.password === 'ad') {
            this._logsService.actions.push('Пользователь вошел в систему с правами администратора');
            this._router.navigate(['/adm']);
          } else {
            console.log(this.loginUserData.email, this.loginUserData.password);
          this._logsService.actions.push('Пользователь вошел в систему с обычными правами');
          this._router.navigate(['/special']);
          }
        },
        err => {
          console.log(err);
          this._logsService.actions.push('Был введен неправильный логин');
          this.invalidLogin = true;
        }
      );
    } else {
      this.captchaDanger = true;
    }
  }
}
