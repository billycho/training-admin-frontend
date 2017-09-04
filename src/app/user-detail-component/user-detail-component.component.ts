import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { User }                from '../User';
import { UserService }         from '../UserService';
 
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css']
})
export class UserDetailComponentComponent implements OnInit {
  UserId:number;
  UserName:string;
  UserEmail:string;

  user:User;

  constructor(private userService: UserService,private route: ActivatedRoute) {
   
     
  }

  ngOnInit() {
     this.UserId = this.route.snapshot.params['id'];
   
      this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getHero(+params.get('id')))
      .subscribe(user => this.user = user);
    
  }



}
