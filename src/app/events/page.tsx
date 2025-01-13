import Announcments from "@/components/announcements";
import EventCard from "@/components/event-card";
import UpcomingEvents from "@/components/upcoming-events";
import { EVENTS } from "@/constants";


export default function Events() {
    return (
        <main className="min-h-screen max-md:py-20 md:py-32">
            <h2 className="max-sm:text-3xl sm:text-3xl lg:text-4xl text-black text-center font-medium "> Events </h2>
            <div className="p-4 max-lg:gap-7 lg:gap-16 flex max-lg:flex-col lg:flex-row lg:mr-7 mt-10">
                {/* LEFT */}
                <div className="w-full lg:w-2/3 flex flex-wrap items-start max-lg:justify-center lg:justify-end gap-5">
                    {EVENTS.map((event, i) => {
                        return (
                            <EventCard title={event.title} text={event.text} image={event.image} alt={event.alt} key={i} />
                        )
                    })}
                </div>
                {/* RIGHT */}
                <div className="w-full lg:w-1/3 flex flex-col gap-8">
                    <UpcomingEvents />
                    <Announcments />
                </div>
            </div>
        </main>
    )
}
