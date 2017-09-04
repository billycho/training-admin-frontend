import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';



@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent{
      title = 'Display User'; 
	  user = new User(1,'Andy Soraya','andysoraya@gmail.com');
    Id: number;
    Name: string;
    Email: string;
    isProdEnvironment: string;

  @Input() UserId: number;
    @Input() UserName: string;
      @Input() UserEmail: string;

  constructor() { 
	       

   }

  ngOnInit() {
      console.log("asda");
  }

   

}
