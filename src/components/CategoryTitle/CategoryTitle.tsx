import style from './style.module.scss'

export default function CategoryTitle({ title }: { title: string }) {
    return (
        <>
            <h2 className={style.title}>{title}</h2>
            <span className={style.span}><a href='hola'>Ver más...</a></span>
        </>
    )
}