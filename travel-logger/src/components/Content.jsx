import User from "./User"
import PopularLocations from "./PopularLocations"
import Map from "./Map"
import Categories from "./Categories"
import SearchBar from "./SearchBar"

export default function Content(){
    return(
        <>
            <User/>
            <SearchBar/>
            <Categories/>
            <PopularLocations/>
            <Map/>
            <div className="bottom"></div>
        </>
    )
}