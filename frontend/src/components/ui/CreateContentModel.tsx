import { useRef } from "react"
import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { SelectOption } from "./SelectOption"
import axios from "axios"
import { BACKEND_URL } from "../../config"

export const CreateContentModel = ({ open, onClose }) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const selectOptionRef = useRef<HTMLSelectElement>(null)

    const addContent = async() => {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const type = selectOptionRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/notes/content`, {
            title,
            link,
            type
        }, {
            headers: { 
                token: localStorage.getItem('token')
            }
        })
        onClose();
    }

    return (
        <div>
            {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded">
                        <div className="flex justify-end cursor-pointer" onClick={onClose}>
                            <CrossIcon />
                        </div>
                        <div className="flex flex-col">
                            <div className='flex justify-center font-medium text-black pb-3'>Add New Content</div>
                            <InputBox reference={titleRef} placeholder={'Title'} />
                            <InputBox reference={linkRef} placeholder={'Link'} />
                            <SelectOption reference={selectOptionRef} />
                        </div>
                        <div className="flex justify-center pt-3">
                            <Button variant='primary' text='Submit' onClick={addContent} />
                        </div>

                    </span>
                </div>
            </div>}
        </div>
    )
}