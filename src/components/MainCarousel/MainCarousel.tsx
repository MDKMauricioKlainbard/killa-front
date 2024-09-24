'use client'
import { Carousel, CarouselNext, CarouselPrevious, CarouselItem, CarouselContent } from "../ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import { ImagesCarousel } from "@/lib/dummies"
import { useEffect, useRef, useState } from "react"
import { type CarouselApi } from "../ui/carousel"

export default function MainCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [count, setCount] = useState(0);
    const [current, setCurrent] = useState(0);

    const autoplay = useRef(
        Autoplay({
            stopOnInteraction: false,
        })
    )

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const handleMouseLeave = () => {
        autoplay.current.play()
    }

    const handleMouseEnter = () => {
        autoplay.current.stop()
    }

    return (
        <section
            className="w-full flex justify-center items-center h-[30rem] relative"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <Carousel
                opts={
                    {
                        loop: true,
                    }
                }
                plugins={[autoplay.current]}
                className="w-full h-full"
                setApi={setApi}
            >
                <CarouselContent className="-ml-0">
                    {ImagesCarousel.map((image) => (
                        <CarouselItem className="h-full pl-0">
                            <div className="relative">
                                <div className="text-[#FFFFFF] z-20 w-full h-full flex flex-col absolute justify-center items-center gap-4">
                                    <h2 className="text-5xl font-[500] text-center">
                                        LOGO EN BLANCO
                                    </h2>
                                    <div className="font-[300] px-10 py-3 border-[#FFFFFF] border-solid border-2 rounded-xl text-2xl">
                                        NOVEDADES
                                    </div>
                                </div>
                                <Image alt={image.name} src={image.image} className="w-full h-[30rem] brightness-50" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className={`absolute left-20 z-10 top-[50%] scale-150 hidden`} color="#FFFFFF" />
                <CarouselNext className="absolute right-20 z-10 top-[50%] scale-150 hidden" color="#FFFFFF" />
            </Carousel>
            <div className="absolute flex bottom-10 gap-2">
                {
                    count && ImagesCarousel.map((_, index) => (
                        <div key={index} className={`h-[10px] w-[10px] rounded-full ${index + 1 === current ? 'bg-[#FFFFFF]' : 'bg-gray-400'}`}>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}