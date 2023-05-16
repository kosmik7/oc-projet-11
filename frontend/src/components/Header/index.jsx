import { Link } from "react-router-dom";
import "./style.scss";

function NavLinks() {
  return (
    <div>
      <Link className="main-nav-item" to="/">
        <i className="fa fa-user-circle"></i> Sign In
      </Link>
    </div>
  );
}

export default function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <NavLinks />
    </nav>
  );
}
