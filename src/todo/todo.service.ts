import { Injectable } from '@nestjs/common';
import { CreateTodoDTO } from './dto/create-todo.dto';

interface Todo {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly isDone: boolean;
}

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'Test',
      description: 'This is a test todo',
      isDone: true,
    },
  ];

  // Creates a new todo (Add todo to array)
  async addTodo(createTodoDTO: CreateTodoDTO): Promise<Todo> {
    this.todos.push(createTodoDTO);

    // return last added item

    return this.todos[0];
    // return this.todos.at(-1);
  }

  // Fetch all todos
  async getAllTodos() {
    return this.todos;
  }

  // Deletes a todo from the array
  async deleteTodo(todoID: number): Promise<any> {
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoID);
    return this.todos.splice(todoIndex, 1);
  }

  // Deletes a todo by ID and add a new one (Update process)
  async editTodo(postID: number, createTodoDTO: CreateTodoDTO): Promise<Todo> {
    await this.deleteTodo(postID);
    this.todos.push(createTodoDTO);

    // return last added item
    return this.todos.at(-1);
  }
}
