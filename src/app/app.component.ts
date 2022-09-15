import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todo: string = '';
  todos: string[] = [];
  disabled = false;


  delItem(newItem: string) {
    this.todos = this.todos.filter(items => items !== newItem);
    console.log(this.todos);
  }


  changeInp(inpElem: string | any) {
    if (inpElem.value.length >= 1) {
      this.disabled = true
    } else this.disabled = false
  }

  getValue(inpElem: string | any) {
    if (inpElem.value) {
      this.todo = inpElem.value
      this.todos.push(this.todo)
      inpElem.value = ''
      this.disabled = false
    }
  }
}
