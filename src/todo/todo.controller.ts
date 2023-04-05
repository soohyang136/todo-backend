import { Body, Controller, Post } from "@nestjs/common";
import { TodoCreateRequest } from "./dto/request/TodoCreateRequest";
import { TodoService } from "./todo.service";

@Controller("/todo")
export class TodoController {

    constructor(
        private todoService: TodoService
    ){};

    @Post("/create")
    async createTodo(@Body() request: TodoCreateRequest):Promise<void> {
        this.todoService.createTodo(request);
    }
}