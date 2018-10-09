import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { NameService } from './name.service';
import { LogsService } from './logs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _authService: AuthService, private _nameService: NameService, private _logsService: LogsService) {}
  onEvent() {
    this._logsService.actions.push('Нажата кнопка Events');
  }
  onMember() {
    this._logsService.actions.push('Нажата кнопка Members');
  }
  onAction() {
    this._logsService.actions.push('Нажата кнопка Actions');
  }
  onLogin() {
    this._logsService.actions.push('Нажата кнопка Login');
  }
  onRegister() {
    this._logsService.actions.push('Нажата кнопка Register');
  }
}
