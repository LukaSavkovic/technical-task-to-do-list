import { createAction, props } from "@ngrx/store";
import { ToDoItemListState } from "../state/todo-item-list.state";

export enum ToDoItemActionTypes {

    GetItemList = '[ToDoItemList] Get to-do item',
    GetItemListSuccess = '[ToDoItem] Success to-do item list',
    GetItemListError = '[ToDoItem] Error to-do item list',

    AddItem = '[ToDoItem] Add to-do item',
    AddItemSuccess = '[ToDoItem] Added to-do item',

    EditItem = '[ToDoItem] Edit to-do item',
    EditItemSuccess = '[ToDoItem] Edited to-do item',

    DeleteItem = '[ToDoItem] Delete to-do item',
    DeleteItemSuccess = '[ToDoItem] Deleted to-do item'
}

export const getToDoItemList = createAction(ToDoItemActionTypes.GetItemList)
export const getToDoItemListSuccess = createAction(ToDoItemActionTypes.GetItemListSuccess, props<{ toDoItemList: ToDoItemListState }>())
export const getToDoItemListError = createAction(ToDoItemActionTypes.GetItemListError)

export const addToDoItem = createAction(ToDoItemActionTypes.AddItem, props<{ toDoItem: string }>())
export const addToDoItemSuccess = createAction(ToDoItemActionTypes.AddItemSuccess, props<{ toDoItem: string }>())

export const editToDoItem = createAction(ToDoItemActionTypes.EditItem, props<{ toDoItem: string, editedToDoItem: string }>())
export const editToDoItemSuccess = createAction(ToDoItemActionTypes.EditItemSuccess, props<{ toDoItemList: string[] }>())

export const deleteToDoItem = createAction(ToDoItemActionTypes.DeleteItem, props<{ toDoItem: string }>())
export const deleteToDoItemSuccess = createAction(ToDoItemActionTypes.DeleteItemSuccess, props<{ toDoItemList: string[] }>())