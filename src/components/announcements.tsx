
export default function Announcments() {
    return (
        <section className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between my-6"> 
                <h1 className='text-xl font-semibold'> Announcements </h1>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {/* FIRST ANN */}
                <div className="bg-lightSky rounded-md p-4">
                    <p className="text-sm text-black leading-7 mt-2"> ISS has participated in ESRI Eastern Africa partner and Kenya ESRI user group conference in March 2022. </p>
                </div>
                {/* TODO: For more Announcements */}
                {/* <div className="bg-lightPurple rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">  Lorem ipsum dolor </h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1"> 2025-01-07 </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
                <div className="bg-lightYellow rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">  Lorem ipsum dolor </h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1"> 2025-01-07 </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div> */}
            </div>
        </section>
    )
}