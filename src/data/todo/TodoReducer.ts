import {TodoState} from "@/data/todo/types/TodoState";
import {TodoAction, TodoActionType} from "@/data/todo/types/TodoAction";

export const TodoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionType.SET_TODOS:
      return {...state, todos: [...action.todos] }
    case TodoActionType.ADD_TODO:
      return {...state, todos: [...state.todos, action.todo] }
    case TodoActionType.DELETE_TODO:
      return {...state, todos: state.todos.filter(t => t.id !== action.id)}
    case TodoActionType.TOGGLE_TODO:
      return {...state, todos: state.todos.map(t => {
          if (t.id === action.id) {
            return { ...t, completed: !t.completed };
          }
          return t
        })}
    default:
      throw Error('Unhandled action')
  }
}