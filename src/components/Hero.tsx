import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative">
            <Image src="/1.jpg" alt="background-image" width={1400} height={200} className=" w-full max-h-auto object-cover bg-center bg-cover bg-no-repeat" />
            <div className="absolute max-sm:top-[35%] sm:top-[32%] md:top-[35%] lg:top-[32%] 2xl:top-[35%] max-sm:left-[7%] sm:left-[8%] xl:left-[12%]">
                <h1 className="max-sm:text-xl max-sm:leading-[25px] sm:text-4xl sm:leading-[40px] max-sm:max-w-[210px] sm:max-w-[350px] md:text-[40px] md:leading-[50px] md:max-w-[430px] lg:text-[70px] lg:leading-[70px] text-wrap lg:max-w-[700px] 2xl:max-w-[800px] text-[#E8F9FD] font-medium"> Empowering Your World with Leading GIS Solutions </h1>
                <button className="max-sm:mt-4 sm:mt-8 md:mt-10 max-sm:w-[120px] sm:w-[250px] max-sm:py-1.5 sm:py-3 rounded-md bg-[#1B2430] text-center max-sm:text-[10px] sm:text-lg text-[#f2f1f6] focus-visible:outline-none"> Learn more </button>
            </div>
        </section>
    )
}
