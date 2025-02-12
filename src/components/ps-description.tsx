
interface Props {
    title: string,
    text: string,
    image: string,
    alt: string,
    children?: React.ReactNode
}

import Image from "next/image";

export default function Description({title, text, image, alt, children} : Props){
    return (
        <section>
            <div className="flex flex-wrap items-start justify-center mr-4 gap-20">
                <Image src={image} alt={alt} width={400} height={350} className="object-cover mt-5" />
                <div>
                    <h1 className="max-md:text-xl md:text-3xl max-lg:text-center lg:text-start font-medium"> {title} </h1>
                    <p className="text-base text-wrap text-justify mt-6 max-md:mx-5 max-w-[500px]"> {text} </p>
                </div>
            </div>
            {children}
        </section>
    )
}
