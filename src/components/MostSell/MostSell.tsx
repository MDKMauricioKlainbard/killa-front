import CategoryTitle from "../CategoryTitle/CategoryTitle";
import { products } from "@/lib/dummies";
import PrevImage from "../PrevImage/PrevImage";
import style from './style.module.scss'

export default function MostSell() {
    return (
        <section className={style.container}>
            <CategoryTitle title="MÁS VENDIDOS" />
            <div>
                <ul className={style.products}>
                    {products.map(product => {
                        return (
                            <li key={product.name}>
                                <PrevImage alt={product.name} src={product.image} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}