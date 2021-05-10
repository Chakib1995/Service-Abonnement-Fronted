import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assu } from '../model/assu';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-assurence',
  templateUrl: './assurence.component.html',
  styleUrls: ['./assurence.component.css']
})
export class AssurenceComponent implements OnInit {
  assus: Assu[];
  assuss:Assu=new Assu();
constructor(private userListService: UserListService, private router: Router) { }

 

  
  ngOnInit(): void {
    this.getAllAssurances();

  }


  private getAllAssurances() {
    this.userListService.getAllAssurances().subscribe(data => {
      this.assus = data;
      console.log(data);
    });

  }



  
  addAssurance() {
    this.userListService.addAssurance(this.assuss).subscribe(data => { console.log(data) },
      error => console.log(error));
      this.goToShowAssu();
  }

  goToShowAssu() {
    this.router.navigate(['/assurence'])
  }

  onSubmit() {
    console.log(this.assuss)
    this.addAssurance();
  }




  
}

