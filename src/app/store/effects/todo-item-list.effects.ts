import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, distinctUntilChanged, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { addToDoItemSuccess, deleteToDoItem, deleteToDoItemSuccess, editToDoItemSuccess, getToDoItemListError, getToDoItemListSuccess, ToDoItemActionTypes } from '../actions/todo-item.actions';
import { selecToDoItemList } from '../selectors/todo-item-list.selectors';

@Injectable()
export class ToDoItemListEffects {
    addToDoItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType<any>(ToDoItemActionTypes.AddItem),
            mergeMap(data => {
                return [
                    addToDoItemSuccess({ toDoItem: data.toDoItem }),
                ]
            }
            ))
    )

    editToDoItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType<any>(ToDoItemActionTypes.EditItem),
            withLatestFrom(this.store.select(selecToDoItemList)),
            mergeMap(([data, toDoItemList]) => {

                const newToDoItemList: string[] = []

                toDoItemList.forEach((item: string) => {
                    if (item === data.toDoItem) {
                        newToDoItemList.push(data.editedToDoItem)
                    } else {
                        newToDoItemList.push(item)
                    }
                })

                return [editToDoItemSuccess({ toDoItemList: newToDoItemList })]
            })
        )
    )

    deleteToDoItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType<any>(ToDoItemActionTypes.DeleteItem),
            withLatestFrom(this.store.select(selecToDoItemList)),
            concatMap(([data, toDoItemList]) => {
                const newToDoItemList = toDoItemList.filter(
                    (toDoItem: string) => toDoItem !== data.toDoItem
                )

                return [deleteToDoItemSuccess({ toDoItemList: newToDoItemList })]
            })
        )
    )

    getFromLocalStorage$ = createEffect(() =>
        this.actions$.pipe(
            ofType<any>(ToDoItemActionTypes.GetItemList),
            switchMap(() => {
                let toDoItemList = [];

                if (localStorage.getItem('state')) {
                    toDoItemList = JSON.parse(localStorage.getItem('state') || '')

                    if (toDoItemList && toDoItemList.toDoList) {
                        return [getToDoItemListSuccess({ toDoItemList: toDoItemList.toDoList })]
                    }
                }

                return [getToDoItemListError()];
            })
        )

    )

    setToLocalStorage$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ToDoItemActionTypes.AddItemSuccess, ToDoItemActionTypes.DeleteItem, ToDoItemActionTypes.EditItem),
                switchMap(() => this.store),
                distinctUntilChanged(),
                tap((state) => localStorage.setItem("state", JSON.stringify(state)))
            ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private store: Store
    ) { }
}