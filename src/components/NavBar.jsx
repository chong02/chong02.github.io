import './../App.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return <navbar className="navbar">
                <Link to={"/"}>
                    <h3> Home </h3>
                </Link>

                <Link to={"/about"}>
                    <h3> About Us </h3>
                </Link>

                <Link to={"/people"}>
                    <h3> Note People </h3>
                </Link>
                
                <Link to={"/hire-us"}>
                    <h3> Hire Us </h3>
                </Link>
                
                <Link to={"/audition"}>
                    <h3> Audition </h3>
                </Link>
                
           </navbar>;
};

export default NavBar;