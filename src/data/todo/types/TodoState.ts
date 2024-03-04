import {Todo} from "@/data/todo/types/Todo";

export interface TodoState {
  todos: Todo[]
}

export const DefaultTodoState = {
  todos: [] as Todo[]
}
