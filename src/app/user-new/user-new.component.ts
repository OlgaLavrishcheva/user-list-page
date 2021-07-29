import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user.class';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  @Input() userNew?: User;
  @Input() header: string;
  @Input() isVisibleBtn: boolean;
  @Input() isVisible: boolean;

  types: string[] = ['Driver', 'Administrator'];

  constructor() { }

  ngOnInit(): void {
  }

}
