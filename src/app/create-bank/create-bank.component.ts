import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../model/bank';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {

  bankss: Bank = new Bank();

  constructor(private userListService: UserListService, private router: Router) { }
  ngOnInit(): void {
  }

  addBank() {
    this.userListService.addBank(this.bankss).subscribe(data => { console.log(data) },
      error => console.log(error));
      this.goToShowBank();
  }

  goToShowBank() {
    this.router.navigate(['/bank'])
  }

  onSubmit() {
    console.log(this.bankss)
    this.addBank();
  }
}
