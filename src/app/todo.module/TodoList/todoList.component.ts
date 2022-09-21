import {Component} from "@angular/core";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.scss']
})

export class TodoListComponent{
  todo: string = '';
  todos: string[] = [];
  disabled = false;
  image = 'https://w7.pngwing.com/pngs/643/421/png-transparent-computer-icons-shopping-cart-shopping-cart-text-service-logo.png';


  removeItem(newItem: string) {
    this.todos = this.todos.filter(items => items !== newItem);
  }


  changeInputColor(inpElem: string | any) {
    this.disabled = inpElem.value.length >= 1;
  }

  getValueFromInput(inpElem: string | any) {
    if (inpElem.value) {
      this.todo = inpElem.value
      this.todos.push(this.todo)
      inpElem.value = ''
      this.disabled = false
    }
  }
}
