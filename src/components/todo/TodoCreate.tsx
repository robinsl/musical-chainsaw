'use client'

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {useTodoStateManager} from "@/components/todo/TodoContextProvider";

export default function TodoCreate() {
  const [name, setName] = useState("")
  const manager = useTodoStateManager()

  return <>
    <Card className={"w-[350px]"}>
      <CardHeader>
        <CardTitle>Create Todo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={"grid w-full items-center gap-4"}>
          <div className={"flex flex-col space-y-1.5"}>
            <Label htmlFor={"TodoCreate"}>Task</Label>
            <Input id={"TodoCreate"} placeholder={"New task"} value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => {
          setName('')
          manager.AddTodo(name)
        }}>Submit</Button>
      </CardFooter>
    </Card>
  </>
}