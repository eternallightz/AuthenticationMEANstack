import { LogsService } from './../../logs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  lyrics: string[] = [`Я помню, как я узнал о тебе. Ты звезда теперь, а тогда никто не знал, хоть убей`,
                      `У нас пир во время чумы, глаза у нимф пусты. Зато наши нимфы юны, ваши — как Windows 3`,
                      `Ты подошла и все мироздание погасло. Ведь я не знал, что тебя найду наконец-то`,
                      `Перекати-поле гонит с неба ветерок. Все переплетено, но не предопределено`,
                      `Пока родители кутят и тратят. Знай, тебя укладывает спать популярный писатель`,
                      `И ты вернёшься, даже если стал полным карман. Горгород, Горгород — дом, но капкан`,
                      `Незаметно поправь её одеяло. За это себя предавая анафеме`,
                      `Ты собрал только половину пазла. Картина маслом, социальный лифт в пирамиде Маслоу`,
                      `Я спускаюсь беспрецедентно оправданный. Лицемерно помилованный, двадцатилетний`,
                      `Где нас нет, услышь меня и вытащи из омута. Веди в мой вымышленный город, вымощенный золотом`];
  rand = 0;
  constructor(private _logsService: LogsService) { }

  ngOnInit() {
  }
  alertOxxxy() {
    // tslint:disable-next-line:prefer-const
    this.rand = Math.floor(Math.random() * this.lyrics.length);
    console.log(this.rand);
    this._logsService.actions.push('Хозяин сервиса читает поэзию');
    console.log(this._logsService.actions);
  }

}
