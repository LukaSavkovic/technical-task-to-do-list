import { Action, createReducer, on } from "@ngrx/store";
import * as toDoItemActions from '../actions/todo-item.actions';
import { initialToDoItemListState, ToDoItemListState } from "../state/todo-item-list.state";

const reducer = createReducer(
    initialToDoItemListState,

    on(toDoItemActions.getToDoItemListSuccess, (state: ToDoItemListState, action) => {
        return { ...state, toDoItems: [...state.toDoItems, ...action.toDoItemList.toDoItems] };
    }),

    on(toDoItemActions.addToDoItemSuccess, (state: ToDoItemListState, action) => {
        return { ...state, toDoItems: [...state.toDoItems, action.toDoItem] };
    }),

    on(toDoItemActions.deleteToDoItemSuccess, (state: ToDoItemListState, action) => {
        return { ...state, toDoItems: action.toDoItemList };
    }),

    on(toDoItemActions.editToDoItemSuccess, (state: ToDoItemListState, action) => {
        return { ...state, toDoItems: action.toDoItemList };
    })
)

export function ToDoItemListReducer(state: ToDoItemListState | undefined, action: Action) {
    return reducer(state, action);
}

