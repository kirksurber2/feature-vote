import './navbar.css'
import { FaUserCircle } from "react-icons/fa";
import { GiFootsteps } from "react-icons/gi";
import Logo from '../../assets/images/Logo/logo-black.png'

export default function NavBar() {

    return(
        <div className="navbar">
            <div className="logoArea">
                <a href="/">
                    <img src={Logo}/>
                </a>
            </div>
            <div className="links">
                <a>About</a>
                <a>Pricing</a>
                <a>Contact</a>
                
            </div>
            <div className="loginArea">
                <a href='/login'>Login / Create</a>
                <FaUserCircle size={25} color='grey' className='icon' />
            </div>
        </div>
    )
}