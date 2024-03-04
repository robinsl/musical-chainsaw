import {TodoContextProvider} from "@/components/todo/TodoContextProvider";

export default function TodoLayout({children}: {
  children: React.ReactNode
}) {
  return <>
    <TodoContextProvider>
      {children}
    </TodoContextProvider>
  </>
}