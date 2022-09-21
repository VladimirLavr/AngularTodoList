import {Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
  selector: 'app-todo-item',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.scss']
})

export class TodoItemComponent {
  @Input() todo: string = '';
  @Input() todos: string[] = [];
  @Input() image: any;
  @Output() itemDel = new EventEmitter<string>;


  deleteItem(event: string | any) {
    this.itemDel.emit(event.path[1].outerText);
  }
}
