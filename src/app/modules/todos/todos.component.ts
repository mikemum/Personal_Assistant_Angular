import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoService } from './todo.service';
import { UserService } from 'src/app/user.service';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  panelOpenState = false;
  todoForm: FormGroup;
  editForm: FormGroup;
  showForm: boolean = false;
  todos: Array<any> = [];
  saveButtonIsDisabled: boolean = true;
  user: any = null;

  todos$: Subscription;
  editForm$: Subscription;
  completeTodo$: Subscription;
  addTodo$: Subscription;
  updateTodo$: Subscription;
  deleteTodo$: Subscription;

  addCompletDeletObserver = {
    next: (res) => {
      console.log('inside addCompleteDleteObserver ', { res });
      this.showForm = false;
      this.loadTodos();
    },
    error: (error) => console.log(error.message),
    complete: () => console.log('Complete'),
  };

  updateTodoObserver = {
    next: (res) => {
      console.log('inside updateTodoObserver ', { res });
      this.showForm = false;
      this.saveButtonIsDisabled = true;
      this.loadTodos();
    },
    error: (error) => console.log(error.message),
    complete: () => console.log('Complete'),
  };

  constructor(
    private formBuilder: FormBuilder,
    private _todoService: TodoService,
    private _userService: UserService
  ) {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      isActive: [true],
    });
    this.editForm = this.formBuilder.group({
      edit_id: [''],
      edit_title: ['', Validators.required],
      edit_description: [''],
      edit_duedate: ['', Validators.required],
    });

    this.editForm$ = this.editForm.valueChanges.subscribe((value) => {
      console.log(value);
      this.saveButtonIsDisabled = false;
    });
  }

  ngOnInit(): void {
    this.loadTodos();
    console.log(this.todos);
  }

  loadTodos() {
    this.todos$ = this._todoService.getTodos().subscribe((res) => {
      console.log({ res });
      let user = JSON.parse(localStorage.getItem('user'));
      this.todos = res.result.filter((todo) => todo.user_id === user?.email);
    });
  }

  getTodos(): Observable<any> {
    return this._todoService.getTodos();
  }

  addTodo(): void {
    console.log('inside addTodo ... ');
    let { title, description, dueDate } = this.todoForm.value;
    let user = JSON.parse(localStorage.getItem('user'));
    // console.log({ user });
    let newTodo = { title, description, dueDate, user_id: user.email };
    // console.log({ newTodo });
    this.addTodo$ = this._todoService
      .addTodo(newTodo)
      .subscribe(this.addCompletDeletObserver);
  }

  updateTodo(
    item: any,
    title: string,
    description: string,
    dueDate: string
  ): void {
    console.log('inside updateTodo ... ', item._id);
    let todoPatch = { title, description, dueDate };
    this.updateTodo$ = this._todoService
      .updateTodo(item._id, todoPatch)
      .subscribe(this.updateTodoObserver);
  }

  completeTask(item: any): void {
    console.log('inside completeTask ... ', item._id);
    let todoPatch = { isActive: !item.isActive };
    this.completeTodo$ = this._todoService
      .updateTodo(item._id, todoPatch)
      .subscribe(this.addCompletDeletObserver);
  }

  deleteTask(item: any): void {
    console.log('inside deleteTask ... ', item.id);
    this.deleteTodo$ = this._todoService
      .deleteTodo(item._id)
      .subscribe(this.addCompletDeletObserver);
  }

  checkSaveButtonStatus(): Observable<any> {
    return of(this.saveButtonIsDisabled);
  }

  ngOnDestroy(): void {
    this.todos$?.unsubscribe();
    this.editForm$?.unsubscribe();
    this.completeTodo$?.unsubscribe();
    this.addTodo$?.unsubscribe();
    this.updateTodo$?.unsubscribe();
    this.deleteTodo$?.unsubscribe();
  }
}
