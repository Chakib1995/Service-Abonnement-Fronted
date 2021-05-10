import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { User } from '../model/user';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  userss: User = new User();

  constructor(private userListService: UserListService, private router: Router) { }
  ngOnInit(): void {
  }

  updateUser() {
    this.userListService.updateUser(this.userss).subscribe(data => { console.log(data) },
      error => console.log(error));
      this.goToShowUser();
  }

  goToShowUser() {
    this.router.navigate(['/showUser'])
  }

  onSubmit() {
    console.log(this.userss)
    this.updateUser();
  }
}
