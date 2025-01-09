'use client'

import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai";
import MobileSidebar from "./mobile-sidebar";

export default function Navbar() {

    const [openNav, setOpenNav] = useState<boolean>(false)

    return (
        <nav>
            <button onClick={() => setOpenNav(true)} className="md:hidden relative top-10 left-6">
                <AiOutlineMenu className="w-7 h-5" />
            </button>
            <div className="relative top-10">
                <div className="flex items-center justify-center max-md:hidden md:gap-5 lg:gap-10">
                    {NAV_LINKS.map((link) => {
                        return (
                            <Link key={link.label} href={link.href} className="text-lg text-black hover:text-blue-500 font-medium"> {link.label} </Link>
                        )
                    })}
                </div>
            </div>
            {openNav && <MobileSidebar setOpenNav={setOpenNav} />}
        </nav>
    )
}
