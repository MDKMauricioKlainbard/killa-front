import style from './style.module.scss'

export default function NavItem({ name, mobile }: { name: string, mobile?: boolean }) {
    return (
        <>
            <li className={style.item} key={name}>
                {name}
                <div className={mobile ? 'hidden' : style.underline}></div>
            </li>
        </>
    )
}