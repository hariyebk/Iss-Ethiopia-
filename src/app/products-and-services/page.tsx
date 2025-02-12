"use client"

import AesSoftwares from "@/components/aes-softwares";
import GssProducts from "@/components/gss-products";
import ProductsServices from "@/components/p&s";
import Description from "@/components/ps-description";
import SatelliteImagery from "@/components/satellite-imagery";
import Training from "@/components/training";
import { TABS } from "@/constants";
import { useState } from "react";

export default function ProductsAndServices(){
    const [active, setActive] = useState<TABS>("Geospacial Solutions and Services")

    return (
        <section className="min-h-screen max-md:py-20 md:mt-32 md:mb-24">
            <div className="max-w-full">
                <div className="flex justify-center">
                    <div className="max-lg:hidden flex flex-wrap items-center justify-between gap-16 text-base text-black font-medium font-sans">
                        <div>
                            <button onClick={() => setActive("Geospacial Solutions and Services")}> Geospacial Solutions and Services </button>
                            {active === "Geospacial Solutions and Services" && <hr className="w-[250px] mt-2 border-t-2 border-blue-700 rounded-sm" />}
                        </div>
                        <div>
                            <button onClick={() => setActive("Geospacial and AEC Software")}> Geospacial and AEC Software </button>
                            {active === "Geospacial and AEC Software" && <hr className="w-[220px] mt-2 border-t-2 border-blue-700 rounded-sm" />}
                        </div>
                        <div>
                            <button onClick={() => setActive("Remote Sensing and Satellite Imagery")}> Remote Sensing and Satellite Imagery </button>
                            {active === "Remote Sensing and Satellite Imagery" && <hr className="w-[280px] mt-2 border-t-2 border-blue-700 rounded-sm" />}
                        </div>
                        <div>
                            <button onClick={() => setActive("Training")}> Training </button>
                            {active === "Training" && <hr className="w-[60px] mt-2 border-t-2 border-blue-700 rounded-sm" />}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-16 max-lg:hidden">
                    {active === "Geospacial Solutions and Services" && <Description image="/gis.jpg" alt="gis" title="Geospacial Solutions and Services" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." children={<GssProducts />} />}
                    {active === "Geospacial and AEC Software" && <Description image="/gis.jpg" alt="gis" title="Geospacial and AEC Software" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." children={<AesSoftwares />} />}
                    {active === "Remote Sensing and Satellite Imagery" && <Description image="/gis.jpg" alt="gis" title="Remote Sensing and Satellite Imagery" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." children={<SatelliteImagery />} />}
                    {active === "Training" && <Description image="/gis.jpg" alt="gis" title="Training" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." children={<Training />} />}
                </div>
                <div className="lg:hidden">
                    <Description image="/gis.jpg" alt="gis" title="Geospacial Solutions and Services" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." children={<GssProducts />} />
                    <div className="mt-16">
                        <Description image="/gis.jpg" alt="gis" title="Geospacial and AEC Software" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." children={<AesSoftwares />} />
                    </div>
                    <div className="mt-16">
                        <Description image="/gis.jpg" alt="gis" title="Remote Sensing and Satellite Imagery" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." children={<SatelliteImagery />} />
                    </div>
                    <div className="mt-16">
                        <Description image="/gis.jpg" alt="gis" title="Training" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." children={<Training />} />
                    </div>
                </div>
            </div>
            {/* <ProductsServices /> */}
        </section>
    )
}
