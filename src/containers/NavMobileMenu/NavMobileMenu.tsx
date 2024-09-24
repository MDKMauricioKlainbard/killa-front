import NavItem from "@/components/NavItem/NavItem"
import style from './style.module.scss'

export default function NavMobileMenu () {
    return (
        <div className={style.menu_container} id="nav_mobile">
            <ul className={style.nav_list}>
                <NavItem name="INICIO" mobile={true}/>
                <NavItem name="PRODUCTOS" mobile={true}/>
                <NavItem name="SOBRE NOSOTROS" mobile={true}/>
                <NavItem name="CONTACTO" mobile={true}/>
            </ul>
        </div>
    )
}