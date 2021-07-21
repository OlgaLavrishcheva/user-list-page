import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user.class';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  @Input() userNew?: User;

  constructor() { }

  ngOnInit(): void {
  }

}
