import { Injectable } from "@angular/core";
import { Observable, of, } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    constructor(

    ) { }

    checkIfToDoItemExists(value: string): Observable<boolean> {
        const existingToDoItems = JSON.parse(localStorage.getItem('state') || '{}')

        if (!localStorage.getItem('state')) {
            return of(false)
        }
        return of(existingToDoItems.toDoList.toDoItems.some((a: string) => a === value))
    }

}
