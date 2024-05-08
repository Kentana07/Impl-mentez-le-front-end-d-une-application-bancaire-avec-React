import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/argentBankLogo.webp";
import "./style.css"
import Login from '../../components/Log-in_out';

function Header(){
    return (
        <header>
            <nav>
                <Link to="/"className='logo-link'><img src={logo} alt="logo argent bank" className='logo' />
                </Link>
                <div>
                    <Login/>
                </div>
            </nav>
        </header>
    )
}


export default Header