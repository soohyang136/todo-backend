import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../type/todo.status-type";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column('boolean', {default: false})
    completed: boolean;

    @Column('datetime')
    date: Date;
}