import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selecToDoItemListLength } from 'src/app/store/selectors/todo-item-list.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  numeberOfItems$: Observable<number>

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {

    this.numeberOfItems$ = this.store.select(selecToDoItemListLength)
  }

}
