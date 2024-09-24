import CategoryTitle from '@/components/CategoryTitle/CategoryTitle'
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel'
import style from './style.module.scss'

export default function CategorySection() {
    return (
        <section className={style.section}>
            <div className={style.category_title}>
                <CategoryTitle title='CATEGORÍA'/>
            </div>
            <div className={style.category_carousel}>
                <CategoryCarousel/>
            </div>
        </section>
    )
}