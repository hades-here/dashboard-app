import "../styles/navbar.css";
import user from "../images/user.jpg";
import Menu from "../images/dots.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
       <Link to={"/"}  > <h1 id="logo" width="100" alt="logo">
          KNOWLEDGE
        </h1></Link>
      </div>

      <div className="btn">

        <Link to="/addVideo"><button id="btn1">CREATE COURSE</button></Link>
        
      </div>

      <div className="profile">
        <img id="user" src={user} alt="user" />
        <img id="menu" src={Menu} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
