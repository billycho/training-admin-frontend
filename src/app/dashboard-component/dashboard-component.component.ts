import { Component, OnInit } from '@angular/core';
import { User }                from '../User';
import { User1 }                from '../User1';
import { UserService }         from '../UserService';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
users: User[];
asda: string;
angka: number;
  constructor(private userService: UserService,
  	private router: Router) { }

  ngOnInit() {


  	this.getUsers();
  	//console.log(this.users.length);

  }

   getUsers(): void {
    this.userService
        .getHeroes()
        .then(users => this.users = users);
  }

}


