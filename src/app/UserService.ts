import { Injectable } from '@angular/core'; 
import { User } from './User';
import { User1 } from './User1';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
 @Injectable() 
 export class UserService {  
   private headers = new Headers({'Content-Type': 'application/json'});
 private heroesUrl = 'api/users';  // URL to web api
	  user = new User(1,'a','a@gmail.com');
	  user1 = new User(2,'b','b@yahoo.com');
	  user2 = new User(3,'c','c@hotmail.com');
	  users = new Array();
    users1 = new Array();
    asda:number;
 	 constructor(private http: Http) { 
  	this.users.push(this.user);
  	this.users.push(this.user1);
  	this.users.push(this.user2);
  }

 	getUsers()
 	{
 		return this.users;
 	}

  getUserById(abc:number)
  {

   
    return this.users.filter(item => item.id == (abc))[0];;
  }

 	getUsersData(): Promise<User[]> {

    
  return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as User[])
             .catch(this.handleError);
}

   getUserData(Id: number): Promise<User> {
    const url = `${this.heroesUrl}/${Id}`;

    console.log(this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError));
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }





    private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
 }