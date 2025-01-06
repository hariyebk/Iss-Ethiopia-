import { NAV_LINKS } from "@/constants"
import { useRouter } from "next/navigation"
import { IoCloseCircleSharp } from "react-icons/io5"

interface MobileSidebarNavProps {
    setOpenNav:  React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileSidebar({setOpenNav} : MobileSidebarNavProps) {

    const {push} = useRouter()

    function handleNavigation(path: string){
        setOpenNav(false)
        push(path)
    }  

    return (
        <section className="absolute inset-0 top-0 left-0 w-[220px] max-h-screen bg-[#252a2e] pl-8 py-7 flex flex-col items-start gap-10">
        <button onClick={() => setOpenNav(false)} className="w-full flex justify-end focus-visible:outline-none">
            <IoCloseCircleSharp className="w-6 h-6 text-white mr-7" />
        </button>
        <div className="flex flex-col items-start gap-5">
            {NAV_LINKS.map((link) => {
                return (
                    <div key={link.label}>
                        <button onClick={() => handleNavigation(link.href)} className="text-base text-white hover:text-blue-500"> {link.label} </button>
                    </div>
                )
            })}
        </div>
    </section>
    )
}
