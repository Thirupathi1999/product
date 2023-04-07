import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  
  todoList:any = [
    {todoSkils:'Graduation' ,Status:'completed'},
    {todoSkils:'Html Training' ,Status:'completed'},
    {todoSkils:'Css Training' ,Status:'completed'},
    {todoSkils:'Js Training' ,Status:'completed'},
    {todoSkils:'Angular Training' ,Status:'Inprogerss'},
  ];
todoskills:any;
todostatus:any;
constructor(){ }
ngOnInit():void{ 
}
addSkills(todoskills:any,todostatus:any){
  let todoData={
    todoSkils: todoskills,
    Status: todostatus
  }
  
  this.todoList.push(todoData);
  this.todoskills=""
  
  
}

deleteSkills(index:any){
  this.todoList.splice(index,1)
}
}
