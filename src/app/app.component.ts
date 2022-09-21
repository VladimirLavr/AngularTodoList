import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todo: string = '';
  todos: string[] = [];
  disabled = false;
  image = 'https://w7.pngwing.com/pngs/643/421/png-transparent-computer-icons-shopping-cart-shopping-cart-text-service-logo.png';


  removeItem(newItem: string) {
    this.todos = this.todos.filter(items => items !== newItem);
  }


  changeInput(inpElem: string | any) {
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
