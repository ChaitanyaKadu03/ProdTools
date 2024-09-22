import TodoBody from "../components/TaskFlow/TodoBody"
import TodoCard from "../components/TaskFlow/TodoCard"
import TodoContent from "../components/TaskFlow/TodoContent"
import { logo } from "../assets/logo/icons"
import { useRecoilValue } from "recoil"
import { activeBranch } from "../store/atoms"

const TaskFlow = () => {
    const branchClick = useRecoilValue(activeBranch)

    return (
        <div className="flex text-black1">
            <div className="w-[360px] bg-black5 min-h-screen flex flex-col">
                <img src={logo} alt="logo" className="w-fit mx-auto py-6 h-[124px] cursor-pointer" />
                <TodoContent />
            </div>
            <div className="flex flex-col w-full">
                <div className="w-full flex justify-center items-center h-[124px]">
                    <h1 className="h2">
                        {branchClick}
                    </h1>
                </div>
                <TodoBody />
            </div>
        </div>
    )
}

export default TaskFlow