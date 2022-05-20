import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { TodosComponent } from './components/todos/todos.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ToDoItemListEffects } from './store/effects/todo-item-list.effects';
import { ToDoItemListReducer } from './store/reducers/todo-item-list.reducer';
import { TodosListItemComponent } from './components/todos/todos-list/todos-list-item/todos-list-item.component';
import { ValidationService } from './services/validation.service';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TodosComponent,
    TodosListComponent,
    TodosListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    StoreModule.forRoot({
      toDoList: ToDoItemListReducer
    }),
    EffectsModule.forRoot([ToDoItemListEffects]),
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
