import Expertise from "@/components/expertise";
import Hero from "@/components/hero";
import Partnerships from "@/components/partnerships";
import WhyChooseGis from "@/components/why-choose-gis";

export default function Home() {
return (
    <main className="min-h-screen py-20">
        <Hero />
        <Expertise />
        <Partnerships />
        <WhyChooseGis />
    </main>
);
}
