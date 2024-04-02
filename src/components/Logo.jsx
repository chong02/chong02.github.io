import './../App.css'
import noteworthyLogo from './../images/noteworthy_logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
    return <logo className="logo">
                <Link to={"/"}>
                    <img src={noteworthyLogo} width="100" height="100"/>
                </Link>
           </logo>;
};

export default Logo;