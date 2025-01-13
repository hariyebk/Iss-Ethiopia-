"use client"

import Image from "next/image";
import { useState } from "react";

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

export default function UpcomingEvents(){
    const [value, onChange] = useState<Value>(new Date())

    return (
        <section className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between my-6"> 
                <h1 className='text-xl font-semibold'> Upcoming Events </h1>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-base text-center py-5"> No Upcoming Events. </h3>
                {/* TODO: For Future Upcoming Events */}
                {/* {events.map((event) => {
                    return (
                        <div key={event.id} className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple"> 
                            <div className="flex items-center justify-between">
                                <h1 className="font-semibold text-gray-600"> {event.title} </h1>
                                <span className="text-gray-300 text-xs"> {event.time} </span>
                            </div>
                            <p className="mt-2 text-gray-400 text-sm"> {event.description} </p>
                        </div>
                    )
                })} */}
            </div>
        </section>
    )
}