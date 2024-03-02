import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <header className="nav">
      <div className="logo">
        <Link to="/" className="links">
        <img src={logo} alt="logo" /></Link>
      </div>
      <div className="links-div">
        <Link className="links" to="/">
          home
        </Link>
        <Link className="links" to="/shop">
          shop
        </Link>
        <Link className="links" to="/about">
          about
        </Link>
        <Link className="links" to="/contact">
          contact
        </Link>
      </div>
    </header>
  );
};

export default Nav;
