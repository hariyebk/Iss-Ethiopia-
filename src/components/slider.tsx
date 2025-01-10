"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { MAP_CAROUSAL } from "@/constants";

export default function Slider() {
    return (
        <Carousel className="max-w-[800px]">
            {MAP_CAROUSAL.map((image, index) => {
                return (
                    <img src={image} key={index} alt="map" className="object-contain" />
                )
            })}
        </Carousel>
    )
}
