import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../model/bank';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  banks: Bank[];
  bankss: Bank;
  constructor(private userListService: UserListService, private router: Router) { }




  ngOnInit(): void {
    this.getAllBanks();

  }


  private getAllBanks() {
    this.userListService.getAllBanks().subscribe(data => {
      this.banks = data;
      console.log(data);
    });

  }



  deleteBankByID(id: number) {
    console.log(id)


    this.userListService.deleteBankByID(id).subscribe(data => {
      this.getAllBanks();


    })

  }
  updateBank(bank: Bank) {
    this.userListService.updateBank(bank).subscribe(data => { console.log(data) },
      error => console.log(error));
    this.goToShowBank();
  }

  goToShowBank() {
    this.router.navigate(['/bank'])
  }

}

