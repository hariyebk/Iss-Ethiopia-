import { GALLERY } from "@/constants";
import Image from "next/image";


export default function Gallery() {
    return (
        <main className='min-h-screen max-md:py-20 md:py-32'>
            <h2 className="max-sm:text-3xl sm:text-3xl lg:text-4xl text-black text-center font-medium "> Gallery </h2>
            <div className="max-w-[1200px] mx-auto mt-8">
                <div className="mt-7 flex flex-wrap items-start justify-center max-sm:px-6 gap-4">
                    {GALLERY.map((image: string, index) => {
                        return (
                            <Image src={image} key={index} alt="staff-image" width={365} height={270} className="rounded-sm object-cover" />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
