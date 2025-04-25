import { useRef } from "react";
import { Button } from "../components/ui/Button"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
        const emailRef = useRef<HTMLInputElement>(null);
        const passwordRef = useRef<HTMLInputElement>(null);
        const navigate = useNavigate();
    
        const submit = async () => {
            const email = emailRef.current?.value;
            const password = passwordRef.current?.value;
    
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
                email,
                password
            })

            const jwt = response.data.token
            localStorage.setItem('token', jwt)
            navigate('/dashboard')

        }
    return (
        <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
            <div className=" bg-white rounded-2xl w-120 h-94 border-2 border-gray-200">
                <div className="flex flex-col p-5 gap-1">
                    <p className="font-extrabold text-3xl text-gray-900">Login</p>
                    <p className="text-gray-900">Enter your email to sign in to your account</p>
                </div>
                <div className="flex flex-col pr-5 pb-5 pl-5">
                    <p className="font-extrabold text-lg text-gray-900">Email</p>
                    <input ref={emailRef} type="text" placeholder="someone@example.com" className="p-2 border border-gray-300 rounded-lg"></input>
                </div>
                <div className="flex flex-col pr-5 pb-5 pl-5">
                    <p className="font-extrabold text-lg text-gray-900">Password</p>
                    <input ref={passwordRef} type="password" className="p-2 border border-gray-300 rounded-lg"></input>
                </div>
                <div className="flex justify-center items-center pt-3 pr-5 pb-5 pl-5">
                    <Button variant='primary' text='Login' fullWidth={true} onClick={submit}/>
                </div>
            </div>
        </div>
    )
}