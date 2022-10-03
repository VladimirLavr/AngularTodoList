import {Component} from "@angular/core";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.scss']
})

export class TodoListComponent {
  todo: string = '';
  todos: string[] = [];


  removeItem(newItem: string) {
    this.todos = this.todos.filter(items => items !== newItem);
  }


  addTodo(inpElem: string | any) {
    if (inpElem.value) {
      this.todo = inpElem.value
      this.todos.push(this.todo)
      inpElem.value = ''
    }
  }
}
