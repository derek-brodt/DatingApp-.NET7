import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}


  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: response => { // what happens if success (200)
        console.log(response);
      }, 
      error: error => console.log(error) // what happens if failure (4**)
    })
  }

  logout() {
    this.accountService.logout();
  }
}