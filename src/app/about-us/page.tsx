import Link from "next/link";


export default function AboutUs() {
    return (
        <main className="max-md:my-20 md:my-32">
            <h2 className="max-sm:text-3xl sm:text-3xl lg:text-4xl text-black text-center font-medium "> About Us </h2>
            <div className="max-sm:mt-7 sm:mt-10 flex items-center justify-center w-full">
                <div className="max-lg:px-10 lg:max-w-[800px] max-md:text-base md:text-lg text-black text-justify font-normal">
                    <p> Information Systems Services (ISS) is a company established with the aim of providing consultancy services in GIS technology and other IT services. ISS is the pioneer GIS services provider in Ethiopia. Founded by two Ethiopian senior GIS experts in the year 1996, Information Systems Services PLC (ISS) became the first private company in Ethiopia to provide GIS services under all categories. Aster Solomon and Yohannes Debebe own and manage ISS.</p>
                    <p className="mt-6"> ISS leveraged its pioneer status to expand the usage of GIS tools across the nation. This meant recruiting and investing in new staff, partnering with the world’s best in GIS and educating the public about the benefits of GIS. These efforts paid off with engagement in complex projects, training & software sales. ISS supports all its clients and maintains a long term relationship to meet their growing needs. </p>
                    <p className="mt-6"> ISS has been the undisputed market leader in Ethiopia and it strive's to grow the market and continue to maintain the quality of our value added GIS services. Please <Link href="/contact-us" className="text-blue-600 font-semibold"> get in touch </Link> to learn more about us </p>
                </div>
            </div>
        </main>
    )
}
