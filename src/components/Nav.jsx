import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="nav">
      <div className="logo">
        <h1><Link to="/" className="links">room</Link></h1>
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
