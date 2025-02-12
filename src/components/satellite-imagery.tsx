import Image from "next/image";


export default function SatelliteImagery() {
    return (
        <div className="mt-16 flex flex-wrap items-start max-lg:justify-center lg:justify-between gap-6 mx-5">
            <div>
                <Image src="/75cm.png" alt="75cm imagery" width={230} height={400} className="object-cover rounded-md mb-4" />
                <span className="text-base flex justify-center w-full"> 75cm imagery </span>
            </div>
            <div>
                <Image src="/50cm.png" alt="50cm imagery" width={230} height={400} className="object-cover rounded-md mb-4" />
                <span className="text-base flex justify-center w-full"> 50cm imagery </span>
            </div>
            <div>
                <Image src="/30cm.png" alt="30cm imagery" width={230} height={400} className="object-cover rounded-md mb-4" />
                <span className="text-base flex justify-center w-full"> 30cm imagery </span>
            </div>
            <div>
                <Image src="/25cm.png" alt="25cm imagery" width={230} height={400} className="object-cover rounded-md mb-4" />
                <span className="text-base flex justify-center w-full"> 25cm imagery </span>
            </div>
        </div>
    )
}
