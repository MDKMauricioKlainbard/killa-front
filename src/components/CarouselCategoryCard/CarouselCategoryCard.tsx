import Image, { StaticImageData } from "next/image";
import style from './style.module.scss'

export default function CarouselCategoryCard(
    { src, alt }: { src: StaticImageData, alt: string }
) {
    return (
        <article className={`${style.article}`}>
            <figure className={style.figure}>
                <Image src={src} alt={alt} fill={true} />
            </figure>
        </article>

    )
}