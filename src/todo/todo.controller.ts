import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  // Create a todo
  @Post('/')
  async create(@Res() res, @Body() createTodoDTO: CreateTodoDTO) {
    try {
      const newTodo = await this.todoService.addTodo(createTodoDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Todo has been submitted successfully!',
        todo: newTodo,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // Fetch all todos
  @Get('/')
  async getAllTodo(@Res() res) {
    const todos = await this.todoService.getAllTodos();

    return res.status(HttpStatus.OK).json({
      message: 'All to-dos are here',
      data: todos,
    });
  }

  // Delete a todo using ID
  @Delete('/delete')
  async deleteTodo(@Res() res, @Query('todoID') todoID) {
    const deletedTodo = await this.todoService.deleteTodo(todoID);
    if (!deletedTodo) {
      throw new NotFoundException('Todo does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Todo has been deleted!',
      todo: deletedTodo,
    });
  }
}
