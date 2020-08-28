import { Component, OnInit, HostBinding } from '@angular/core';

import { UserService } from '../../services/User.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  users: any = [];

  constructor(private userService: UserService) { }


  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        res => {
          this.users = res;
        },
        err => console.error(err)
      );
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id)
      .subscribe(
        res => {
          console.log(res);
          this.getUsers();
        },
        err => console.error(err)
      )
  }

}
