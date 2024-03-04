import {Todo} from "@/data/todo/types/Todo";

export interface ITodoService {
  GetAll: () => Promise<Todo[]>
  Add: (name: string) => Promise<Todo>
  Toggle: (id: number) => Promise<Todo>
  Delete: (id: number) => Promise<boolean>
}