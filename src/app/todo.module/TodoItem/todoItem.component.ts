import {Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
  selector: 'app-todo-item',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.scss']
})

export class TodoItemComponent {
  @Input() todo: string = '';
  @Input() image: any;
  @Output() deleteTodo = new EventEmitter<string>;


  deleteItem(event: string | any) {
    this.deleteTodo.emit(event.path[1].outerText);
  }
}
