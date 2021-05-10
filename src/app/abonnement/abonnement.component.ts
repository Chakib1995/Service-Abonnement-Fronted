import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abonnement } from '../model/abonnement';
import { Contrat } from '../model/contrat';
;
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

  contrats: Contrat[];
  abbs:Abonnement[];
 

  constructor(private userListService: UserListService, private router: Router) { }
  ngOnInit(): void {
    this.showContracts();

  }


  private showContracts() {
    this.userListService.showContracts().subscribe(data => {
      this.contrats = data;
      console.log(data);
    });

    
  }

  abonnement(){
    this.userListService.abonnement().subscribe(data => {
      this.abbs = data;
      this.contrats = data;
      console.log(data);
    });

  }
}
