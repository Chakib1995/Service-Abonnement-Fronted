import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HamoudaServService } from '../hamouda-serv.service';
import { Logg } from '../model/Securitehama';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 logs:Logg;

 
 logss: Logg = new Logg();

  

  constructor(private userListService: HamoudaServService, private router: Router) { }
  ngOnInit(): void {
  
 
  }


  private  getAllUseres() {
    this.userListService. getAllUseres().subscribe(data => {
      this.logs = data;
      console.log(data);
    });

  }

 

  deleteUserByID(id: number) {
    console.log(id)


    this.userListService.deleteUserByID(id).subscribe(data => {
      this.getAllUseres();


    })

  }

  authentification(email : string , password:string){
    this.userListService. authentification(email,password).subscribe(data => {
      this.logs = data;
      console.log(data);
    });

  }
  
  onSubmit() {
    console.log("a");
    this.authentification(this.logss.email ,this.logss.password);
  }

  
}