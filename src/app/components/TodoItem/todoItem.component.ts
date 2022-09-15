import {Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
  selector: 'app-todoItem',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.css']
})

export class TodoItemComponent {
  @Input() todo: string = '';
  @Input() todos: string[] = [];

  @Output() itemDel = new EventEmitter<string>;

  image = 'https://w7.pngwing.com/pngs/643/421/png-transparent-computer-icons-shopping-cart-shopping-cart-text-service-logo.png';
  isDelete = true;


  deleteItem(event: string | any) {
    this.isDelete = !this.isDelete;
    this.itemDel.emit(event.path[1].outerText);
  }
}
