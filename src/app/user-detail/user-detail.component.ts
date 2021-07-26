import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user?: User;
  types: string[] = ['Driver', 'Administrator'];
  constructor() { }

  ngOnInit(): void {
  }

}
