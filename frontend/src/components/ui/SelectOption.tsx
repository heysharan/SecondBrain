export const SelectOption = ({reference} : any) => {
    return (
        <div className="flex justify-between items-center">
            <label className="flex mt-2 text-black font-medium">Type</label>
            <select ref={reference} className="w-60 mr-2 mt-2 px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-0">
                <option value="youtube">Youtube</option>
                <option value="twitter">Twitter</option>
            </select>
        </div>
    )
}