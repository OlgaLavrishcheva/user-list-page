import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user.class';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  selectedUser?: User;
  userNew: User;
  selectedUserNew?: User;
  types: string[] = ['Driver', 'Administrator'];

  model: User = new User('', '', '', '', '', '', '');
  isVisible: boolean;
  isVisibleBtn: boolean;

  constructor(private userService: UserService) {
  }

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
