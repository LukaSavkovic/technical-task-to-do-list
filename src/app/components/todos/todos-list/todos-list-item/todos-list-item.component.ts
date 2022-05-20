import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ValidationService } from 'src/app/services/validation.service';
import { deleteToDoItem, editToDoItem } from 'src/app/store/actions/todo-item.actions';
import { TextValidator } from 'src/app/utils/text-validator';

@Component({
  selector: 'app-todos-list-item',
  templateUrl: './todos-list-item.component.html',
  styleUrls: ['./todos-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListItemComponent implements OnInit {

  @Input() toDoListItem: string

  toDoForm: FormGroup

  constructor(
    private store: Store,
    private validationService: ValidationService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.toDoForm = new FormGroup({
      text: new FormControl(this.toDoListItem, [Validators.required, Validators.pattern('[a-zA-Z]+')], [TextValidator.createValidator(this.validationService)])
    });
  }

  enableEdit() {
    const toDoItem = (<HTMLInputElement>document.getElementById(this.toDoListItem))
    const readOnly = toDoItem.readOnly = !toDoItem.readOnly

    if (readOnly) {
      this.edit(toDoItem.value)
    }
  }

  edit(toDoItemText: string) {
    this.store.dispatch(editToDoItem({ toDoItem: this.toDoListItem, editedToDoItem: toDoItemText }))
  }

  deleteToDoItem() {
    this.store.dispatch(deleteToDoItem({ toDoItem: this.toDoListItem }))
  }

}


