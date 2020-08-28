import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../models/user';

import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  user: User = {
    id: 0,
    Nombre: '',
    Apellido: '',
    Telefono: 0,
    Email: '',
    Direccion: '',
    created_at: new Date ()
  };
  edit : boolean = false;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id) {
      this.userService.getUser(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.user = res;
          this.edit = true;
        },
        err => console.error (err)
      )
    }
  }
savedNewUser(){
  delete this.user.created_at;
  delete this.user.Direccion;
  this.userService.saveUser(this.user)
  .subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/users']);

    },
    err => console.error(err)
  )
}
updateUser(){
  delete this.user.created_at;
  this.userService.updateUser(this.user.id, this.user)
  .subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/users']);
    },
    err => console.error(err)
    )

}
}
