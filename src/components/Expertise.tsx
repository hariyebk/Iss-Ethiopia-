import Link from "next/link";
import { AiOutlineProfile } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";


export default function Expertise() {
    return (
        <section className="mt-20">
        <h2 className="max-md:text-2xl md:text-3xl lg:text-4xl text-[#252a2e] text-center"> Discover Our Expertise </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 max-md:mt-10 md:mt-20">
            <div className="max-sm:w-[300px] max-sm:h-[250px] sm:w-[350px] sm:h-[280px] bg-white rounded-[10px] shadow-md p-4 focus-visible:outline-none md:transition md:ease-in md:delay-150 md:hover:-translate-y-3">
                <AiOutlineProfile className="w-10 h-10 text-[#252a2e] text-center mx-auto" />
                <h4 className="text-lg text-black text-center font-normal mt-5"> Learn about our journey, mission, and expertise in GIS technology consultancy and more. </h4>
                <div className="mt-7 w-full flex items-center justify-center">
                    <Link href="https://iss-et.com/wp-content/uploads/2022/04/Company-Profile-November-2021.pdf" className="max-md:text-base md:text-lg text-blue-500 hover:text-blue-700 font-medium"> View Company Profile </Link>
                </div>
            </div>
            <div className="max-sm:w-[300px] max-sm:h-[250px] sm:w-[350px] sm:h-[280px] bg-white rounded-[10px] shadow-md p-4 focus-visible:outline-none md:transition md:ease-in md:delay-150 md:hover:-translate-y-3">
                <IoMdContacts className="w-10 h-10 text-[#252a2e] text-center mx-auto" />
                <h4 className="max-md:text-base md:text-lg text-black text-center font-normal mt-5"> Reach out to us for inquiries, consultations, or any kind of support. We’re here to help! </h4>
                <div className="mt-7 w-full flex items-center justify-center">
                    <Link href="/contact-us" className="max-md:text-base md:text-lg text-blue-500 hover:text-blue-700 font-medium"> Contact Us </Link>
                </div>
            </div>
            <div className="max-sm:w-[300px] max-sm:h-[250px] sm:w-[350px] sm:h-[280px] bg-white rounded-[10px] shadow-md p-4 focus-visible:outline-none md:transition md:ease-in md:delay-150 md:hover:-translate-y-3">
                <MdLocalOffer className="w-10 h-8 text-[#252a2e] text-center mx-auto" />
                <h4 className="max-md:text-base md:text-lg text-black text-center font-normal mt-5"> Explore our innovative GIS products and tailored services designed to meet your unique business needs.. </h4>
                <div className="mt-7 w-full flex items-center justify-center">
                    <Link href="/products-and-services" className="max-md:text-base md:text-lg text-wrap text-blue-500 hover:text-blue-700 font-medium"> View Products and Services </Link>
                </div>
            </div>
        </div>
    </section>
    )
}
