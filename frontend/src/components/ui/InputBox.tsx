export const InputBox = ({onChange, placeholder}: {onChange: () => void}) => {
    return (
        <input placeholder={placeholder} type={'text'} className="px-4 py-2 border border-slate-300 rounded m-2 focus:outline-none focus:ring-0" onChange={onChange}></input>
    )
}