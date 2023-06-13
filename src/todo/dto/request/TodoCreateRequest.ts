import { Todo } from "src/todo/entity/todo.entity";

export class TodoCreateRequest {
    title: string;
    content: string;
    date: string;
}