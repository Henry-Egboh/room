import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="nav">
      <div className="logo">
        <h1>room</h1>
      </div>
      <div className="links-div">
        <Link className="links" to="/">
          home
        </Link>
        <Link className="links" to="/">
          shop
        </Link>
        <Link className="links" to="/">
          about
        </Link>
        <Link className="links" to="/">
          contact
        </Link>
      </div>
    </header>
  );
};

export default Nav;
