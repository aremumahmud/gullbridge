import '../css/header.css'
import logo from '../assets/logo1.jpg'
import {FaBars, FaDollarSign, FaGears, FaHandshake, FaHouse, FaNewspaper, FaPhone} from 'react-icons/fa6'

function Header(){
    return (
        <div className="header_wrap">
<div className="left_menu">
    <ul>
        <li><FaHouse />Home</li>
        <li><FaGears />Services</li>
        <li><FaNewspaper />News & Insights</li>
    </ul>
</div>
<div className="logo"><img src={logo} alt="" /></div>
<div className="right_menu">
<ul>
        <li><FaHandshake />What we do</li>
        <li><FaDollarSign />Funding</li>
        <li><FaPhone />Contacts</li>
    </ul>
</div>
<div className="hidden_menu">
    <FaBars />
</div>
        </div>
    )
}


export default Header