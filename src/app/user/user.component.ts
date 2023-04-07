import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
listofUsers:any 
constructor(private http:HttpClient){}
ngOnInit():void{
this.http.get('https://dummyjson.com/users').subscribe((Response:any)=>{
  console.log(Response)
  this.listofUsers = Response;
  console.log(this.listofUsers);
})
}
deleteUser(index:any){
  alert(index)
  this.listofUsers.users.splice(index,1);
}
addUser(index:any){
  this.listofUsers.users.unshift(1);
} 
}
