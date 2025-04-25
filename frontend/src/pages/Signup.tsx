import { useRef } from "react"
import { Button } from "../components/ui/Button"
import axios from "axios"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const submit = async () => {
        const firstName = firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
            firstName,
            lastName,
            email,
            password
        })

        alert('You have signup!')
        navigate('/signin')
    }

    return (
        <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
            <div className=" bg-white rounded-2xl w-120 h-137 border-2 border-gray-200">
                <div className="flex flex-col p-5 gap-1">
                    <p className="font-extrabold text-3xl text-gray-900">Signup</p>
                    <p className="text-gray-900">Enter your email to sign up for an account</p>
                </div>
                <div className="flex flex-col pr-5 pb-5 pl-5">
                    <p className="font-extrabold text-lg text-gray-900">Firstname</p>
                    <input ref={firstNameRef} type="text" className="p-2 border border-gray-300 rounded-lg"></input>
                </div>
                <div className="flex flex-col pr-5 pb-5 pl-5">
                    <p className="font-extrabold text-lg text-gray-900">Lastname</p>
                    <input ref={lastNameRef} type="text" className="p-2 border border-gray-300 rounded-lg"></input>
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
                    <Button variant='primary' text='Signup' fullWidth={true} onClick={submit}/>
                </div>
            </div>
        </div>
    )
}