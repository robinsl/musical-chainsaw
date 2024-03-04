import {Todo} from "@/data/todo/types/Todo";

export enum TodoActionType {
  SET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
}

export interface SetTodoAction {
  type: TodoActionType.SET_TODOS
  todos: Todo[]
}

export interface AddTodoAction {
  type: TodoActionType.ADD_TODO
  todo: Todo
}

export interface DeleteTodoAction {
  type: TodoActionType.DELETE_TODO
  id: number
}

export interface ToggleTodoAction {
  type: TodoActionType.TOGGLE_TODO
  id: number
}

export type TodoAction = SetTodoAction | AddTodoAction | DeleteTodoAction | ToggleTodoAction
