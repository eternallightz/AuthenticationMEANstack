import { LogsService } from './../../logs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  constructor(private _logsService: LogsService) { }

  ngOnInit() {
  }
  onLog() {
    this._logsService.logs = true;
    this._logsService.actions.push('Администратор добавил вкладку "действия"');
  }
}
