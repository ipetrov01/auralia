import {inject} from 'aurelia-framework';
//import {Router} from 'aurelia-router';
import {ToDos} from '../resources/data/todo';
import{AuthService} from 'aurelia-auth';

@inject(ToDos, AuthService)
export class List {  
  constructor(todos, auth){
		this.todos = todos;
		this.auth = auth;
    this.message = 'List';
  	this.user = JSON.parse(sessionStorage.getItem('user'));
    this.showList = true;
    this.priorities = ['Low', 'Medium', 'High', 'Critical']

  }
  async activate(){
		await this.todos.getUserTodos(this.user._id);
	}

  createTodo(){	
		this.todoObj = {
			todo: "",
			description: "",
			dateDue: new Date(),
			 userId: this.user._id,
       priorities: this.priorities[0]
		}
		this.showList = false;		
  }
  async saveTodo(){
		if(this.todoObj){		
			let response = await this.todos.save(this.todoObj);
			if(response.error){
				alert("There was an error creating the ToDo");
			} else {
				//Could provide feeback									
			}
			this.showList = true;
		}
	}



  logout(){
    sessionStorage.removeItem('user');
    this.auth.logout();

  }
}

