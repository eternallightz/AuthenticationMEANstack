import { Injectable } from '@angular/core';

@Injectable()
export class LogsService {
  logs = false;
  actions: string[] = [];
  constructor() { }

}
