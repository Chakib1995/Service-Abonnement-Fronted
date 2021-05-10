import { error } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
 userss: User = new User();

  constructor(private userListService: UserListService, private router: Router) { }
  ngOnInit(): void {
  }

  addUser() {
    this.userListService.addUser(this.userss).subscribe(data => { console.log(data) },
      error => console.log(error));
      this.goToShowUser();
  }

  goToShowUser() {
    this.router.navigate(['/showUser'])
  }

  onSubmit() {
    console.log(this.userss)
    this.addUser();
  }
}
