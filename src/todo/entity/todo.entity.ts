import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../type/todo.status-type";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.UNCOMPLETED
    })
    status: Status;
}