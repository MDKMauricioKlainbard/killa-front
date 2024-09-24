import BurgerMenu from "@/components/BurgerMenu/BurgerMenu"
import styles from './style.module.scss'
import ShoppingBagIcon from "@/components/ShoppingBagIcon/ShoppingBagIcon"
import PurchaseHistoryIcon from "@/components/PurchaseHistoryIcon/PurchaseHistoryIcon"
import NavItem from "@/components/NavItem/NavItem"
import ProfileMobileIcon from "@/components/ProfileMobileIcon/ProfileMobileIcon"
import NavMobileMenu from "../NavMobileMenu/NavMobileMenu"

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.burger}>
                        <BurgerMenu />
                    </div>
                    <nav className={styles.nav_container}>
                        <ul className={styles.nav}>
                            <NavItem name='INICIO' />
                            <NavItem name='PRODUCTOS' />
                            <NavItem name='SOBRE NOSOTROS' />
                            <NavItem name='CONTACTO' />
                        </ul>
                    </nav>
                    <div className={styles.account}>
                        <ProfileMobileIcon />
                        <ShoppingBagIcon />
                        <PurchaseHistoryIcon />
                    </div>
                </div>
            </header>
            <NavMobileMenu />
        </>
    )
}