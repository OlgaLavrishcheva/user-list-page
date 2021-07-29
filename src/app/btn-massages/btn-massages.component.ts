import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-massages',
  templateUrl: './btn-massages.component.html',
  styleUrls: ['./btn-massages.component.css']
})
export class BtnMassagesComponent implements OnInit {
  @Input() isVisibleBtn: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
