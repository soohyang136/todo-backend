import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TodoCreateRequest } from "./dto/request/TodoCreateRequest";
import { Todo } from "./entity/todo.entity";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todRepository: Repository<Todo>
    ){};
    
    async createTodo(request: TodoCreateRequest) {
        const todo = new Todo();
        todo.content = request.content;
        await this.todRepository.save(todo);
    }
}