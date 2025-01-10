import Image from "next/image";


export default function Partnerships() {
    return (
        <section className="max-mid:mt-16 mid:mt-20">
            <h2 className="max-md:text-2xl md:text-3xl lg:text-4xl text-[#252a2e] text-center"> Our Trusted Partnerships </h2>
            <div className="flex max-mid:flex-col max-mid:items-center mid:justify-between gap-16 mx-auto max-md:mt-10 md:mt-20 max-w-[1000px]">
                {/* ESRI */}
                <div className="max-w-[500px]">
                    <div className="flex justify-center w-full">
                        <Image src="/esri.png" alt="esri logo" width={300} height={200} className="object-cover" />
                    </div>
                    <p className="mt-6 max-sm:text-sm sm:text-base text-center text-black font-normal max-sm:max-w-[300px] sm:max-w-[450px]"> ISS has been an ESRI Authorized Reseller since 1999, providing our clients with world-class GIS software solutions and technical support. This longstanding partnership reflects our commitment to delivering cutting-edge geospatial technology to empower businesses and organizations. </p>
                </div>
                {/* AUTODESK */}
                <div className="max-w-[500px]">
                    <div className="flex justify-center w-full">
                        <Image src="/autodesk.png" alt="autodesk logo" width={250} height={150} className="object-cover" />
                    </div>
                    <p className="mt-6 max-sm:text-sm sm:text-base text-center text-black font-normal max-sm:max-w-[300px] sm:max-w-[450px]"> As of April 2023, ISS proudly became an Authorized Reseller of Autodesk products, expanding our offerings to include industry-leading design and engineering software. This partnership enables us to deliver comprehensive solutions for GIS, architecture, engineering, and construction projects. </p>
                </div>
            </div>
        </section>
    )
}
