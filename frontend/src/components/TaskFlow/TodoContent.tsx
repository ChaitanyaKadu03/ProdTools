import { useEffect, useState } from 'react'
import { plus, note } from '../../assets/icons/icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { activeBranch, branchList } from '../../store/atoms'

const TodoContent = () => {
    const navigate = useNavigate()
    const [branchData, setBranchData] = useRecoilState(branchList)
    const [branchClick, setBranchClick] = useRecoilState(activeBranch)

    useEffect(() => {
        async function getContent() {
            const response = await axios.get("http://localhost:3000/taskflow/fetch-branch", {
                headers:
                    { Authorization: localStorage.getItem("token") }
            })

            if (!response.data.success) {
                navigate('/signin')
            }

            setBranchData(response.data.data)
            setBranchClick(response.data.data[0].name)
        }

        getContent()
    }, [])

    return (
        <div className='text-black2 flex flex-col gap-4'>
            <div className='flex justify-between items-center px-4 '>
                <p className='h4'>Todos</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
            <div className='flex flex-col gap-4 px-2'>
                {branchData.map((data) => {
                    return (
                        <div key={data.id} className={`flex gap-4 px-2 py-2 rounded-xl cursor-pointer w-full h-full ${data.name == branchClick ? 'bg-slate-600' : null}`} onClick={() => { setBranchClick(data.name) }}>
                            <img src={note} alt='icon' className='h-[24px]' />
                            <p className='h5'>{data.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoContent