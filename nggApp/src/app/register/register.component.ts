import { LogsService } from './../logs.service';
import { RouterModule } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    email: null,
    password: null
  };
  constructor(private _auth: AuthService, private _router: Router, private _logsService: LogsService) { }

  ngOnInit() {
  }
  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._logsService.actions.push('Зарегистрировался новый пользователь');
          this._router.navigate(['/special']);
        },
        err => console.log(err)
      );
  }

}
