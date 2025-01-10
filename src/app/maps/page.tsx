import Slider from "@/components/slider";


export default function Maps() {
    return (
        <main className='min-h-screen max-md:pt-24 max-md:pb-20 md:pt-28 md:pb-20 px-5'>
            <h2 className="max-md:text-xl md:text-2xl text-black text-center text-wrap font-medium"> Our clients are always satisfied by our map making capabilities. </h2>
            <div className="mt-12 flex items-center justify-center">
                <Slider />
            </div>
        </main>
    )
}
