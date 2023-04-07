import { Component,OnInit } from '@angular/core';
import { from } from 'rxjs';
import{FormGroup,FormBuilder,Validators} from'@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  users:any=[];
  user:any=[];
  userForm!:FormGroup;
  constructor(private fb:FormBuilder){ }


ngOnInit():void{
this.userForm=this.fb.group({
  name:["suresh",Validators.required],
  gender:[],
  emailId:[],
  phone:[],
  salary:[],
  address:[],

})
}
createUser(userForm:any){
  console.log(userForm);
  
  this.users.push(userForm.value);
}

reset(){
  this.userForm.reset()
}
delete(index:any){
this.users.splice(index,1)
}
edit(index:any){

}

 



}
