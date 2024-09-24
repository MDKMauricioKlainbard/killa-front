import Image from "next/image";
import style from './style.module.scss'

export default function PrevImage({ alt, src }: { alt: string, src: string }) {
    return (
        <img src={src} alt={alt} className={style.image}/>
    )
}