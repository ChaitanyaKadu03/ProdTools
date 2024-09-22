import axios from "axios"
import { useRecoilValue } from "recoil"
import { activeBranch } from "../../store/atoms"
import { useRef, useState } from "react"

const TodoCard = (todosValue: any) => {
    const branchClick = useRecoilValue(activeBranch)
    const [newTitle, setNewTitle] = useState(todosValue.todosValue.title)
    const [newTodos, setNewTodos] = useState(todosValue.todosValue.todos)
    const inputText = useRef<HTMLInputElement | null>(null)

    return (
        <div className="flex flex-col w-[360px] h-fit p-8 bg-black5 rounded-lg gap-4">
            <div className="flex justify-between items-center">
                <p className="h4">{newTitle}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange2 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
            <div className="flex flex-col gap-2">
                {newTodos.map((response: string) => {
                    return <div>
                        <span />
                        <p className="p3">{response}</p>
                    </div>
                })}
            </div>
            <div className="flex justify-between items-center">
                <input type="text" name="newTodo" placeholder="Type here.." ref={inputText}
                    className="bg-transparent focus:outline-none" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 cursor-pointer"
                    onClick={async () => {
                        const oldTodos = newTodos;
                        oldTodos.push(inputText.current?.value)
                        setNewTodos(oldTodos)
                        await axios.post('http://localhost:3000/taskflow/update-todo', {
                            title: todosValue.todosValue.title,
                            name: branchClick,
                            newTitle: newTitle,
                            newTodos: newTodos
                        }, { headers: { Authorization: localStorage.getItem('token') } })
                    }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
        </div>
    )
}

export default TodoCard