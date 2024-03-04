'use client'

import {createContext, useContext, useReducer} from "react";
import {DefaultTodoState, TodoState} from "@/data/todo/types/TodoState";
import TodoStateManager from "@/data/todo/TodoStateManager";
import {TodoReducer} from "@/data/todo/TodoReducer";
import MemoryTodoService from "@/data/todo/service/MemoryTodoService";

const TodoStateContext = createContext({} as TodoState)
const TodoStateManagerContext = createContext({} as TodoStateManager)
const service = new MemoryTodoService()


const TodoContextProvider = ({children}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(TodoReducer, DefaultTodoState)
  const todoStateManager = new TodoStateManager(service, dispatch)

  return <>
    <TodoStateContext.Provider value={state}>
      <TodoStateManagerContext.Provider value={todoStateManager}>
        {children}
      </TodoStateManagerContext.Provider>
    </TodoStateContext.Provider>
  </>
}

const useTodoState = () => useContext(TodoStateContext)
const useTodoStateManager = () => useContext(TodoStateManagerContext)

export {TodoContextProvider, useTodoState, useTodoStateManager}