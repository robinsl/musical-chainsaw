

import {ITodoService} from "@/data/todo/service/ITodoService";
import { Todo } from "../types/Todo";

export default class MemoryTodoService implements ITodoService {
    private todos: Todo[] = []

    async GetAll(): Promise<Todo[]> {
      'use server'
      return this.todos
    }

    async Add(name: string): Promise<Todo> {
        'use server'
        const todo = {id: Date.now(), name, completed: false}
        this.todos.push(todo)

        return todo;
    }

    async Toggle(id: number): Promise<Todo> {
        'use server'
        this.todos = this.todos.map(t => {
            if(t.id === id) {
                return {...t, completed: !t.completed}
            }
            return {...t}
        })

        return this.todos.filter(t => t.id === id)[0]
    }

    async Delete(id: number): Promise<boolean> {
        'use server'
        this.todos = this.todos.filter(t => t.id !== id)
        return true;
    }
}