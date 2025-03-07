import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import './index.css'



const Header = () =>{
    const navigate = useNavigate() 

    const onClickLogout = () =>{
        Cookies.remove("jwtToken")
        navigate("/login")
    }

    const onClickRegisteredEvents = () =>{
        navigate("/registeredEvents") ;
    }

    const onClickHome = () =>{
        navigate("/home") ;
    }

    return(
        <div>
            <button type="button" onClick={onClickLogout}>Logout</button>
            <button onClick={onClickRegisteredEvents}>Registered Events</button>
            <button onClick={onClickHome}>Home</button>
        </div>
    )
}

export default Header 
