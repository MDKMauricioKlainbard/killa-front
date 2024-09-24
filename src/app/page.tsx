import Image from "next/image";
import MainCarousel from "@/components/MainCarousel/MainCarousel";
import style from './style.module.scss'
import { categorys } from "@/lib/dummies";
import CategoryImage from "../images/categoryImage.png"
import CategorySection from "@/containers/CategorySection/CategorySection";

export default async function Home() {
  let categorysFromArea = categorys.filter(category => category.area === 'Indumentaria')
  categorysFromArea = categorysFromArea.map(category => {
    category.name = category.name.toUpperCase()
    return category
  })
  return (
    <main>
      <MainCarousel />
      <section className="py-[2rem] border-b-2 border-b-solid border-b-[#E5E5E5 ]">
        <ul className={style.categorys}>
          {categorysFromArea.map(category => (
            <li className="relative flex justify-center items-center">
              <Image alt={category.name} src={CategoryImage} className="brightness-50 rounded-[0.6rem]" />
              <span className="absolute text-white text-2xl font-[700]">{category.name}</span>
            </li>
          ))}
        </ul>
      </section>
      <CategorySection/>
      <CategorySection/>
    </main>
  );
}
