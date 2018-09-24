import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
