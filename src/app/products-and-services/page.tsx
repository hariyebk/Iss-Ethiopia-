import Image from "next/image";


export default function ProductsAndServices() {
    return (
        <section className="my-24">
            <div className="flex flex-col items-center mx-auto max-lg:max-w-[800px] lg:max-w-[900px]">
                <h2 className="max-lg:text-3xl lg:text-4xl text-black text-center font-medium "> Products and Services </h2>
                <div className="max-sm:mt-10 sm:mt-16 flex items-center justify-start max-w-full pl-10 pr-5">
                    <ul>
                        <li className="text-black font-normal">
                            <h3 className="max-md:text-lg md:text-xl"> 1. Geospacial Solutions and Services </h3>
                            <div className="pt-7 max-md:pl-3 md:pl-10">
                                <h4 className="max-sm:text-base sm:text-lg"> A. Geospacial Consultancy </h4>
                                <ul className="pt-5 max-md:pl-2 md:pl-10 max-sm:text-sm sm:text-base font-normal">
                                    <li> I.&nbsp; Needs Assessment for implementing a Geographic Information System; including defining organizational staffing, system hardware and software requirments. </li>
                                    <li className="pt-3"> II.&nbsp; Geodatabase design and development. </li>
                                </ul>
                                <h4 className="max-sm:text-base sm:text-lg mt-4"> B. Topographical Surveying </h4>
                                <h4 className="max-sm:text-base sm:text-lg mt-4"> C. Geolocation Apps development </h4>
                            </div>
                            <Image src="/image1.png" alt="topogrphical surveying" width={500} height={400} className="object-cover mt-6 max-sm:rounded-sm sm:rounded-md max-sm:w-full max-sm:h-auto" />
                        </li>
                        <li className="text-black font-normal mt-10">
                            <h3 className="max-md:text-lg md:text-xl"> 2. Geospacial and AEC Software </h3>
                            <div className="pt-7 max-md:pl-3 md:pl-10">
                                <h4 className="max-sm:text-base sm:text-lg"> A. Esri Products </h4>
                                <ul className="pt-5 max-md:pl-2 md:pl-10 max-sm:text-sm sm:text-base font-normal">
                                    <li> I.&nbsp; ARCGIS Pro </li>
                                    <li className="pt-3"> II.&nbsp; ARCGIS Online </li>
                                    <li className="pt-3"> III.&nbsp; ARCGIS Enterprise  </li>
                                </ul>
                                <h4 className="max-sm:text-base sm:text-lg mt-4"> B. Autodesk Products </h4>
                            </div>
                        </li>
                        <li className="text-black font-normal mt-7">
                            <h3 className="max-md:text-lg md:text-xl"> 3. Remote Sensing and Satellite Imagery </h3>
                            <div className="pt-7 max-md:pl-3 md:pl-10">
                                <h4 className="max-sm:text-base sm:text-lg"> A. 25cm imagery </h4>
                                <h4 className="max-sm:text-base sm:text-lg mt-4"> B. 30cm imagery </h4>
                                <h4 className="max-sm:text-base sm:text-lg mt-4"> B. 50cm imagery </h4>
                                <h4 className="max-sm:text-base sm:text-lg mt-4"> B. 75cm imagery </h4>
                            </div>
                            <Image src="/image3.png" alt="75cm imagery" width={500} height={400} className="object-cover mt-6 max-sm:rounded-sm sm:rounded-md max-sm:w-full max-sm:h-auto" />
                        </li>
                        <li className="text-black font-normal mt-10">
                            <h3 className="max-md:text-lg md:text-xl"> 3. Training </h3>
                            <div className="pt-7 max-md:pl-3 md:pl-10">
                                <h4 className="max-sm:text-base sm:text-lg"> A. GIS Training </h4>
                                <h4 className="max-sm:text-base max-md:pl-3 sm:text-lg mt-4"> B. Autodesk Training will be coming soon </h4>
                            </div>
                            <Image src="/image4.png" alt="training" width={500} height={350} className="object-cover mt-6 max-sm:rounded-sm sm:rounded-md" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
