'use client'
import { Carousel, CarouselNext, CarouselPrevious, CarouselItem, CarouselContent } from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import CarouselCategoryCard from "@/components/CarouselCategoryCard/CarouselCategoryCard"
import DummyImage from '../../images/article.jpg'
import { useEffect, useState } from "react"
import style from './style.module.scss'

export default function CategoryCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api, current])

    const articles = [
        {
            alt: 'Imagen',
            src: DummyImage,
        },
        {
            alt: 'Imagen',
            src: DummyImage,
        },
        {
            alt: 'Imagen',
            src: DummyImage,
        },
        {
            alt: 'Imagen',
            src: DummyImage,
        },
        {
            alt: 'Imagen',
            src: DummyImage,
        },
        {
            alt: 'Imagen',
            src: DummyImage,
        },
    ]

    return (
        <Carousel
            opts={{
                loop: true,
                align: "start",
                dragFree: true,
                
            }}
            className={style.carousel}
            setApi={setApi}
        >
            <CarouselContent className="-ml-0">
                {articles.map((article, index) => (
                    <CarouselItem key={index} className="basis-1/3 pl-0">
                        <CarouselCategoryCard alt={article.alt} src={article.src} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}