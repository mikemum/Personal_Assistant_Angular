import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosMaterialModule } from './todos-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    TodosMaterialModule,
    ReactiveFormsModule
  ]
})
export class TodosModule { }
