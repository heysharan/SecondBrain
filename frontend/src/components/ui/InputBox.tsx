export const InputBox = ({ placeholder, reference }: { placeholder: string, reference: any }) => {
    return (
        <div className="flex justify-between items-center">
            <p className="font-medium text-black">{placeholder}</p>
            <input ref={reference} type={'text'} className="px-4 py-2 border border-slate-300 rounded m-2 focus:outline-none focus:ring-0"></input>
        </div>
    )
}
