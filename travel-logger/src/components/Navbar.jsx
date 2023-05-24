import navIcons from "../assets/navbar-icons"


export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav--icons">
                <img src={navIcons.home} alt="home" id="nav--home-icon"/>
                <img src={navIcons.date} alt="dates" id="nav--cal-icon"/>
                <img src={navIcons.search} alt="search" id="nav--search-icon"/>
                <img src={navIcons.favourite} alt="favourites"id="nav--love-icon"/>
                <img src={navIcons.settings} alt="settings" id="nav--settings-icon"/>
            </div>
        </nav>

    )
}