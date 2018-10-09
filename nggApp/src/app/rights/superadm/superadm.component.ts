import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { NameService } from '../../name.service';


@Component({
  selector: 'app-superadm',
  templateUrl: './superadm.component.html',
  styleUrls: ['./superadm.component.css']
})
export class SuperadmComponent implements OnInit {
  constructor(private _nameService: NameService) { }

  ngOnInit() {
  }

}
