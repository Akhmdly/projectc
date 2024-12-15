import { NavLink } from "react-router-dom";

export default function SubMenu(){
    return(
        <div>
            <nav className="sub-menu-nav">
                <div className="sub-menu">
                <NavLink to="/yenilikler" className="active-link">YENILIKLƏR</NavLink>
                <NavLink to="/brendler" className="active-link">BRENDLƏR</NavLink>
                <NavLink to="/gift-cards" className="active-link">RƏQƏMSAL HƏDİYYƏ KARTLARI</NavLink>
                <NavLink to="/geyim" className="active-link">GEYİM</NavLink>
                <NavLink to="/ayaqqabi" className="active-link">AYAQQABI</NavLink>
                <NavLink to="/canta-ve-aksesuarlar" className="active-link">ÇANTA VƏ AKSESUARLAR</NavLink>
                <NavLink to="/gozellik" className="active-link">GÖZƏLLİK</NavLink>
                <NavLink to="/ev" className="active-link">EV</NavLink>
                <NavLink to="/endirim" className="highlight active-link">ENDİRİM</NavLink>
                </div>
            </nav>
        </div>
    )
}