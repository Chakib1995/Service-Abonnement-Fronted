import { Component, OnInit } from '@angular/core';
import { Logg } from '../model/Securitehama';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent implements OnInit {
userss: Logg = new Logg();
  constructor() { }

  ngOnInit(): void {
  }

}
