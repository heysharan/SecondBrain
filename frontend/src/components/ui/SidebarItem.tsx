import { ReactElement } from "react";

export const SidebarItem = ({ text, icon }: { text: string, icon: ReactElement }) => {
    return (
        <div className="flex gap-2 hover:bg-gray-100 transform-all duration-600 rounded-lg m-3 cursor-pointer">
            <div className="p-3">
                {icon}
            </div>
            <div className="flex items-center">
                {text}
            </div>
        </div>
    )
}