import Image from "next/image";


export default function AesSoftwares() {
    return (
        <div className="mt-16 flex lg:flex-row max-lg:flex-col lg:items-start max-lg:items-center max-lg:justify-center lg:justify-between max-lg:gap-14">
            <div>
                <h2 className="text-2xl text-black text-center font-medium"> A. &nbsp; Esri Products </h2>
                <div className="flex flex-wrap items-center justify-center max-md:gap-4 md:gap-7">
                    <div className="mt-10 px-6">
                        <Image src="/esri/online.jpeg" alt="arcGIS-onlie" width={70} height={60} className="object-cover flex justify-center mb-6" />
                        <span className="text-base text-center -ml-4"> ARCGIS Online </span>
                    </div>
                    <div className="mt-10 px-6">
                        <Image src="/esri/pro.jpeg" alt="arcGIS-pro" width={70} height={60} className="object-cover flex justify-center mb-6" />
                        <span className="text-base text-center -ml-2"> ARCGIS Pro </span>
                    </div>
                    <div className="mt-10 px-6">
                        <Image src="/esri/enterprise.jpeg" alt="arcGIS-enterprise" width={70} height={60} className="object-cover flex justify-center mb-6 ml-3" />
                        <span className="text-base text-center -ml-3"> ARCGIS Enterprise </span>
                    </div>
                </div>
            </div>
            <div className="mr-5">
                <h2 className="text-2xl text-black text-center font-medium"> B. &nbsp; Autodesk Products </h2>
            </div>
        </div>
    )
}