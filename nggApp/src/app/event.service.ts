import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
  private _eventsUrl = 'http://localhost:3000/api/events';
  private _specialUrl = ' http://localhost:3000/api/special';

  constructor(private http: HttpClient) { }
  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }
  getSpecial() {
    return this.http.get<any>(this._specialUrl);
  }
}
