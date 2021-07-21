import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {User} from '../user.class';
import {USERS} from '../mock-users';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // users = USERS;
  users: User[] = [];
  selectedUser?: User;

  model: User = new User('', '', '', '', '', '', '');

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
