import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { User } from '../model/user';

import { UserListService } from '../user-list.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  userss:User;


  constructor(private userListService: UserListService, private router: Router) { }
  ngOnInit(): void {
    this.getAllEmployes();

  }


  private getAllEmployes() {
    this.userListService.getAllEmployes().subscribe(data => {
      this.users = data;
      console.log(data);
    });

  }

 

  deleteUserByID(id: number) {
    console.log(id)


    this.userListService.deleteUserByID(id).subscribe(data => {
      this.getAllEmployes();


    })

  }
  updateUser(user:User) {
    this.userListService.updateUser(user).subscribe(data => { console.log(data) },
      error => console.log(error));
      this.goToShowUser();
  }
  
  goToShowUser() {
    this.router.navigate(['/showUser'])
  }
  
 
  
}

///////////////////////
