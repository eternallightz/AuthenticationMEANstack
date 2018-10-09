import { Component, OnInit } from '@angular/core';
import { LogsService } from '../logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  constructor(private _logsService: LogsService) { }

  ngOnInit() {
  }

}
