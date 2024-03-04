import {Metadata} from "next";
import TodoCreate from "@/components/todo/TodoCreate";
import TodoTable from "@/components/todo/TodoTable";

export const metadata: Metadata = {
    title: 'Next Todo',
}

export default function TodoPage () {
    return <>
        <div className={"md:flex flex-col md:flex-row w-full p-4"}>
            <div className={"h-full space-y-4 items-center"}>
                <TodoCreate />
            </div>
            <div className={"md:w-full w-full h-full ml-4 overflow-auto"}>
                <TodoTable />
            </div>
        </div>
    </>
}