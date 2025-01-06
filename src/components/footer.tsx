import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
    return (
        <footer className='relative inset-0 bottom-0 w-full h-[200px] bg-[#252a2e]'>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h4 className="text-white max-sm:text-sm sm:text-base max-sm:px-6 text-wrap text-center max-sm:max-w-[400px] sm:max-w-[400px] md:max-w-[700px] leading-7"> Copyright © 2025 &nbsp; ISS Ethiopia (Information Systems Services PLC). &nbsp; All Rights Reserved. </h4>
                <div className="mt-8">
                    <ul className='flex flex-wrap items-center gap-5'>
                        <Link href="https://www.facebook.com"> <FaFacebook className='max-sm:w-4 max-sm:h-4 sm:w-5 sm:h-5 text-white' /> </Link>
                        <Link href="https://www.instagram.com"> <FaInstagram className='max-sm:w-4 max-sm:h-4 sm:w-5 sm:h-5 text-white' /> </Link>
                        <Link href="https://www.telegram.org"> <FaTelegram className='max-sm:w-4 max-sm:h-4 sm:w-5 sm:h-5 text-white' /> </Link>
                        <Link href="https://www.tiktok.com"> <FaTiktok className='max-sm:w-4 max-sm:h-4 sm:w-5 sm:h-5 text-white' /> </Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
