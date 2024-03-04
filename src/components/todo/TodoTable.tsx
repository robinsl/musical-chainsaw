'use client'

import {useTodoState} from "@/components/todo/TodoContextProvider";
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import TodoRow from "@/components/todo/TodoRow";

export default function TodoTable() {
  const state = useTodoState()

  return <>
    <h1 className="text-l font-bold">Task List</h1>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Status</TableHead>
          <TableHead>Task</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {state.todos.map(t => (
          <TableRow key={t.id}>
            <TodoRow todo={t}/>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
}