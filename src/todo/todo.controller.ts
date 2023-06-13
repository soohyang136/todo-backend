import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { TodoCreateRequest } from "./dto/request/TodoCreateRequest";
import { TodoService } from "./todo.service";
import { Todo } from "./entity/todo.entity";
import { request } from "http";
import { TodoUpdateRequest } from "./dto/request/TodoUpdateRquest";

@Controller("/todo")
export class TodoController {

    constructor(
        private todoService: TodoService
    ){};

    @Post("/create")
    async createTodo(@Body() request: TodoCreateRequest):Promise<void> {
        this.todoService.createTodo(request);
    }

    @Get("")
    async getTodoByDate(@Query("date") date: string):Promise<any> {
        return this.todoService.getTodoByDate(date);
    }

    @Get("/:id")
    async getTodoById(@Param("id") id: number):Promise<Todo> {
        return this.todoService.getTodoById(id);
    }

    @Put("/:id")
    async updateTodo(@Param("id") id: number, @Body() request: TodoUpdateRequest):Promise<void> {
        this.todoService.updateTodo(id, request);
    }

    @Delete("/:id")
    async deleteTodo(@Param("id") id: number) {
        this.todoService.deleteTodo(id);
    }

    @Put("/complete/:id")
    async completeTodo(@Param("id") id: number) {
        this.todoService.completeTodo(id)
    }

    @Put("/uncomplete/:id")
    async uncompleteTodo(@Param("id") id: number) {
        this.todoService.uncompleteTodo(id);
    }
    
}