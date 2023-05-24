import searchIcon from "../assets/search-alt.svg"

export default function SearchBar(){
    return(
        <div className="search-bar">
            <img src={searchIcon} alt="search-icon" />
            <input type="text" placeholder="search for places..."/>
        </div>
        
    )
}