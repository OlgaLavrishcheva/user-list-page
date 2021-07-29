import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  users: User[] = [];
  selectedUser?: User;
  @Input() user?: User;
  @Input() isVisible: boolean;
  @Input() header: string;
  types: string[] = ['Driver', 'Administrator'];
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  offSelect(user: User) {
    this.user = null;
  }
}
