import { Outlet, Link } from "react-router-dom";
import "../css/NavBar.css";

export const Navbar = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={refreshPage}>
        <img src="images/LOGO.png" alt="logo" className="navbar-logo-img" />
        <p className="navbar-logo-text">Nftopus</p>
      </div>
        <div>
          <Link to="/" className="navbar-item">Home</Link>
        </div>
        <div >
          <Link to="/explore" className="navbar-item">
            Explore
          </Link>
        </div>
        <div>
          <Link to="/about" className="navbar-item">
            About Us
          </Link>
        </div>
        <div>
          <Link to="/wallet" className="navbar-item">
            Wallet
          </Link>
        </div>
        <Outlet />
    </div>
  );
};
