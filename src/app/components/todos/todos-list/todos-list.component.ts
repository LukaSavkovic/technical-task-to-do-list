import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getToDoItemList } from 'src/app/store/actions/todo-item.actions';
import { selecToDoItemList } from 'src/app/store/selectors/todo-item-list.selectors';


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  toDoList$ = this.store.select(selecToDoItemList)

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getToDoItemList());
  }

}
