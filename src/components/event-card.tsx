
interface Props {
    title: string,
    text: string,
    image?: string
    alt?: string
}

export default function EventCard({title, text, image, alt} : Props) {
    return (
        <div className="bg-white p-5 rounded-md max-md:w-full  md:w-[350px] max-md:h-auto md:max-h-[459px] border-none focus-visible:outline-none">
            <h3 className="text-base text-black text-wrap font-semibold"> {title} </h3>
            {image && alt && <img src={image} alt={alt} className="object-cover rounded-sm w-full max-md:max-h-[330px] md:max-h-[300px] py-4" />}
            <p className="text-sm text-black text-wrap text-justify overflow-clip mt-2"> {text} </p>
        </div>
    )
}
