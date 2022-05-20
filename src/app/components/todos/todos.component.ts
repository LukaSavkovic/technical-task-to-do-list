import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ValidationService } from 'src/app/services/validation.service';
import { addToDoItem } from 'src/app/store/actions/todo-item.actions';
import { TextValidator } from 'src/app/utils/text-validator';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  toDoForm = new FormGroup({
    text: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')], [TextValidator.createValidator(this.validationService)])
  });

  constructor(
    private store: Store,
    private validationService: ValidationService
  ) { }

  ngOnInit(): void {
  }

  addItem(inputText: string) {
    this.store.dispatch(addToDoItem({ toDoItem: inputText }));
    this.toDoForm.controls.text.setValue('')
  }


}
