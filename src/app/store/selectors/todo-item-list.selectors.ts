import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDoItemListState } from "../state/todo-item-list.state";

export const selectToDoList = createFeatureSelector<any>('toDoList')

export const selecToDoItemList = createSelector(selectToDoList, (state: ToDoItemListState) => state.toDoItems)
export const selecToDoItemListLength = createSelector(selectToDoList, (state: ToDoItemListState) => state.toDoItems.length)