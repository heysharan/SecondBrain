import { Logo } from "../../icons/Logo"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"

export const Sidebar = () => {
    return(
        <div className="h-screen bg-white border-r w-72 border-slate-300 fixed left-0 top-0">
            <div className="flex gap-2 pt-5 pr-3 pl-3 mb-10">
                <Logo />
                <p className="font-extrabold text-2xl flex items-center">SecondBrain</p>
            </div>

            <div>
            <SidebarItem text='Twitter' icon={<TwitterIcon width="25px" height="25px"/>} />
            <SidebarItem text='Youtube' icon={<YoutubeIcon width="25px" height="25px"/>} />
            </div>
        </div>
    )
}