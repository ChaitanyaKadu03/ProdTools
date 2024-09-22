import { useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { activeBranch } from '../../store/atoms'

const TodoBody = () => {
    const navigate = useNavigate()
    const branchClick = useRecoilValue(activeBranch)
    const [todoList, setTodoList] = useState([{ title: "Sample Title", todos: ['todo1', 'todo2'] }])

    useEffect(() => {
        async function getTodoList() {
            if (!(branchClick == 'Sample')) {
                const response = await axios.get('http://localhost:3000/taskflow/fetch-todo', { headers: { Authorization: localStorage.getItem("token"), name: branchClick } })

                if (!response.data.success) {
                    navigate('/signin')
                }

                setTodoList(response.data.data)
            }

        }

        getTodoList()
    }, [branchClick])
    return (
        <div className='p-12 flex gap-12'>
            {todoList.map(data => {
                if (!(data.title == 'Sample Title')) {
                    return <TodoCard todosValue={data} />
                }
            })}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-16 w-16 text-black3 cursor-pointer hover:text-black2"
                onClick={() => { }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

        </div>
    )
}

export default TodoBody