import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";
import "./style.scss";

function NavLinks() {
  const dispatch = useDispatch();
  const { username, isLoggedIn } = useSelector((state) => state.user);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {firstName}
          </Link>
          <Link
            className="main-nav-item"
            onClick={() => {
              dispatch(logout());
            }}
          >
            <i className="fa fa-sign-out"></i>Sign Out
          </Link>
        </>
      ) : (
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>Sign In
        </Link>
      )}
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
