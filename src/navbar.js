//import logo from './logo-matt.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
        <div className="navbar">
            <ul>
                <li className="title">Matthew Mahendra</li>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
            </ul>
        </div>
    );

}

export default Navbar