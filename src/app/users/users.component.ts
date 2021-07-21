import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {User} from '../user.class';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: { firstName: string; lastName: string; userName: string; type: string; email: string } = {
    userName: 'mperry1992',
    firstName: 'Matthew',
    lastName: 'Perry',
    email: 'matthew@mail.com',
    type: 'Administrator',
  };

  types: string[] = ['Гость', 'Модератор', 'Администратор'];
  model: User = new User('', '', '', '', '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
