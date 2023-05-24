import bellIcon from "../assets/bell.svg"
import userIcon from "../assets/user.svg"

export default function User(){
    return(
        <div className="user">
            <div className="greet-section">
                <p className="user--greet">Hello, John</p>
                <p className="user--location">Kuala Lumpur, Malaysia</p>
            </div>
            <div className="user--icons">
                <img src={bellIcon} alt="notifications" id="user--bell-icon"/>
                <img src={userIcon} alt="pfp" id="user--user-icon"/>
            </div>
            
        </div>
    )
}