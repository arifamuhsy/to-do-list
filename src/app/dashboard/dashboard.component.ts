import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faCoffee = faCoffee;
  faPlus = faPlus;

  constructor(private todoService: TodoService){}
  todo?: Todo[];

  getAllToDo(){
    this.todoService.getAllToDo().subscribe(data=>{
      this.todo = data;
      console.log(this.todo);
    });
  }

  ngOnInit(): void {
    this.getAllToDo();
  }
}
