import SearchIcon from '@mui/icons-material/Search';
import style from './style.module.scss'

export default function SearchBar() {
    return (
        <form role="search" className={style.search}>
            <button type="submit">
                <SearchIcon sx={{fontSize: 30}}/>
            </button>
            <input type="search" placeholder="Buscar productos..."></input>
        </form>
    )
}