import Announcments from "@/components/announcements";
import EventCard from "@/components/event-card";
import UpcomingEvents from "@/components/upcoming-events";
import { EVENTS } from "@/constants";


export default function Events() {
    return (
        <main className="min-h-screen max-md:py-20 md:py-32">
            <h2 className="max-sm:text-3xl sm:text-3xl lg:text-4xl text-black text-center font-medium "> Events </h2>
            <div className="large:max-w-[1270px] mx-auto">
                <div className="max-large:gap-7 flex max-lg:flex-col lg:flex-row lg:justify-between mt-10 aboveMid:pl-4 large:pl-0">
                    {/* LEFT */}
                    <div className="max-lg:w-full lg:w-[57%] flex flex-wrap items-start max-md:justify-start md:justify-center midlarge:justify-start gap-5">
                        {EVENTS.map((event, i) => {
                            return (
                                <EventCard title={event.title} text={event.text} image={event.image} alt={event.alt} key={i} />
                            )
                        })}
                    </div>
                    {/* RIGHT */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-8 lg:pr-6 large:pr-0">
                        <UpcomingEvents />
                        <Announcments />
                    </div>
                </div>
            </div>
        </main>
    )
}
