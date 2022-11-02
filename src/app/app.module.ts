import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {TodoItemComponent} from "./todo.module/TodoItem/todoItem.component";
import {FormsModule} from "@angular/forms";
import {TodoListComponent} from "./todo.module/TodoList/todoList.component";



@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
