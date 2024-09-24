'use client'
import style from './style.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function BurgerMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const openMenu = () => {
        const menu = document.getElementById('nav_mobile') as unknown as HTMLElement
        !showMenu ? menu.style.display = "block" : menu.style.display = "none"
        setShowMenu(!showMenu)
    }
    return (
        <figure className={style.burger} onClick={openMenu}>
            <MenuIcon sx={{ fontSize: 36 }} />
        </figure>
    )
}