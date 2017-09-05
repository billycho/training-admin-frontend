import { Component, OnInit, Input} from '@angular/core';
import { User } from '../user';
import { UserService } from '../UserService';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css'],
  providers: [UserService]
})
export class UserListComponentComponent implements OnInit {
  // user = new User(1,'a','a@gmail.com');
  // user1 = new User(2,'b','b@yahoo.com');
  // user2 = new User(3,'c','c@hotmail.com');
  // users = new Array();

  userId:number = 0;
  userName:string = "name";
  userEmail:string = "email";
  valid:boolean = false;
  
  users:User[];
  user:User;
  user1:User;
  user2:User;

  constructor(private userService: UserService) { 

//     this.user = new User(1,"Jack Soraya","jacksoraya@gmail.com");
//     this.user1 = new User(2,"Jack Soraya 2","jacksoraya2@gmail.com");
//     this.user2 = new User(3,"Jack Soraya 3","jacksoraya3@gmail.com");
//   	this.users = [
//   this.user,
//   this.user1,
//   this.user2
// ];

//   	for(let a of this.users)
//   	{
//   		console.log(a['id']);
//   	}

   // this.asdax = this.userService.getUsers();

   // for(let b of this.asdax)
   //  {
   //    console.log(b['Name']);
   //  }

   //this.users = this.userService.getUsers();
   //console.log(this.userService.getHeroes());
  }


  myFunc(a,b,c)
  {
    this.userId = a;
    this.userName = b;
    this.userEmail = c;
    this.valid = true;
  }

  ngOnInit() {
    this.getUsers();
    //console.log(this.users.length);

  }

   getUsers(): void {
    this.userService
        .getUsersData()
        .then(users => this.users = users);
  }

}
