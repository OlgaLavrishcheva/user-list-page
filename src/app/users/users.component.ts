import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {User} from '../user.class';
import {USERS} from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;
  selectedUser?: User;

  // types: string[] = ['Driver', 'Administrator'];
  model: User = new User('', '', '', '', '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
