import { MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";

export default function ContactUs() {
    return (
        <main className='min-h-screen max-md:py-20 md:py-32'>
            <h2 className="max-sm:text-3xl sm:text-3xl lg:text-4xl text-black text-center font-medium "> Contact Us </h2>
            <div className="max-sm:mt-7 sm:mt-10 max-lg:px-8 lg:max-w-[800px] mx-auto">
                <p className="max-md:text-base md:text-lg text-black text-justify font-normal"> Get in touch to learn more about how we can fulfill your GIS requirements. Whether you are looking to purchase GIS software or get high quality GIS training, or complete GIS consultancy solution for your organization, &nbsp; you have all these answers from ISS Ethiopia. </p>
                <div className="mt-10">
                    <div className="flex items-center justify-start gap-5">
                        <div className="flex flex-nowrap items-center gap-3">
                            <MdLocationOn className="w-5 h-5 text-[#252a2e] focus-visible:outline-none max-md:hidden" />
                            <span className="max-lg:text-lg lg:text-xl text-[#252a2e] font-semibold text-nowrap"> Address  - </span>
                        </div>
                        <p className="max-md:text-sm md:text-base text-black text-wrap"> Suite 402, RIM SEVEN Bldg &nbsp; In front of Civil Service University &nbsp; Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="flex items-center justify-start gap-5 mt-6">
                        <div className="flex items-center gap-3 pl-1">
                            <IoMdMail className="w-5 h-5 text-[#252a2e] focus-visible:outline-none max-md:hidden" />
                            <span className="max-lg:text-lg lg:text-xl text-[#252a2e] text-nowrap font-semibold"> Email  -</span>
                        </div>
                        <Link href="mailto:info@iss-ethiopia.com" className="max-md:text-sm md:text-base text-black hover:text-blue-500 text-wrap"> info@iss-ethiopia.com </Link>
                    </div>
                    <div className="flex items-center justify-start gap-5 mt-6">
                        <div className="flex items-center gap-3 pl-1">
                            <FaPhoneAlt className="w-5 h-5 text-[#252a2e] focus-visible:outline-none max-md:hidden" />
                            <span className="max-lg:text-lg lg:text-xl text-[#252a2e] text-nowrap font-semibold"> Phone  -</span>
                        </div>
                        <Link href="mailto:" className="max-md:text-sm md:text-base text-black text-wrap font-normal"> (+251) 011-667-5977, &nbsp; (+251) 09-23513614 </Link>
                    </div>
                    <div className="flex items-center justify-start gap-5 mt-6">
                        <div className="flex items-center gap-3 pl-1">
                            <BsGlobe className="w-5 h-5 text-[#252a2e] focus-visible:outline-none max-md:hidden" />
                            <span className="max-lg:text-lg lg:text-xl text-[#252a2e] text-nowrap font-semibold"> Website  -</span>
                        </div>
                        <Link href="https://iss-et.com" className="max-md:text-sm md:text-base text-black hover:text-blue-500 text-wrap"> http://www.iss-ethiopia.com </Link>
                    </div>
                    <div className="mt-7 flex flex-wrap justify-start gap-2 max-md:text-base md:text-lg font-normal"> 
                        <p className="text-black"> For direction, use our what3words address link </p> 
                        <Link href="https://what3words.com/giving.backpacks.casino" className="text-blue-600"> here </Link> 
                    </div>
                </div>
            </div>
        </main>
    )
}
