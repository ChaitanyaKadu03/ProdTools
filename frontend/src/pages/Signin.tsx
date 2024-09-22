import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const Signin = () => {
    const emailInput = useRef<HTMLInputElement | null>(null)
    const passwordInput = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <form className="bg-black1 flex flex-col gap-6 items-center justify-center p-8 rounded-lg w-[380px]">
                <h1 className="h1">Sign In<span className="text-orange2">.</span></h1>
                <input type="text" autoComplete="true" name="email" ref={emailInput} placeholder="Email" className="border-2 border-black3 px-4 py-2 rounded-md p1 w-full" />
                <input type="text" autoComplete="true" name="password" ref={passwordInput} placeholder="Password" className="border-2 border-black3 px-4 py-2 rounded-md p1 w-full" />
                <button
                    className="bg-black6 text-black1 w-full h4 py-2 rounded-md"
                    onClick={async (e) => {
                        e.preventDefault()

                        const response = await axios.post('http://localhost:3000/signin', { email: emailInput.current?.value, password: passwordInput.current?.value })

                        if (!response.data.success) {
                            alert("Please check the inputs")
                        }

                        localStorage.setItem("token", response.data.token)

                        navigate('/')
                    }}
                >
                    Submit
                </button>                
                <a href='/signup' className="p2">Create an account?</a>
            </form>
        </div>
    )
}

export default Signin