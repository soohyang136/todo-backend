import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TodoCreateRequest } from "./dto/request/TodoCreateRequest";
import { Todo } from "./entity/todo.entity";
import { Status } from "./type/todo.status-type";
import { TodoUpdateRequest } from "./dto/request/TodoUpdateRquest";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    ){};
    
    async createTodo(request: TodoCreateRequest):Promise<void> {
        const todo = new Todo();
        todo.title = request.title;
        todo.content = request.content;
        todo.date = new Date(request.date);
        await this.todoRepository.save(todo);
    }

    async getTodoByDate(date: string):Promise<any> {
        return await this.todoRepository.find(
            {where: {
                date: new Date(date)
            }}
        )
    }

    async getTodoById(id: number):Promise<Todo> {
        return await this.todoRepository.findOne({where:{id:id}});
    }

    async updateTodo(id: number, request: TodoUpdateRequest) {
        console.log(id);
        const todo:Todo = await this.todoRepository.findOne({where:{id:id}});
        console.log(todo);
        await this.todoRepository.update(
            {
                id: todo.id
            },
            {
                title: request.title,
                content: request.content
            }
        );
    }

    async deleteTodo(id: number) {
        const todo:Todo = await this.todoRepository.findOne({where: {id: id}});
        await this.todoRepository.delete(todo);
    }

    async completeTodo(id: number) {
        await this.todoRepository.update(
            {
                id: id
            },
            {
                completed: true
            }
        )
    }

    async uncompleteTodo(id: number) {
        await this.todoRepository.update(
            {
                id: id
            },
            {
                completed: false
            }
        );
    }
}