import "../css/NavBar.css";

export const Navbar = () => {
    const refreshPage = () => {
        window.location.reload(false);
      };
    return (
        <div className="navbar">
            <div className="navbar-logo" onClick={refreshPage}>
                <img src="images/LOGO.png" alt="logo" className="navbar-logo-img"/>
                <p className="navbar-logo-text">Nftopus</p>
            </div>
            <div className="navbar-item">Home</div>
            <div className="navbar-item">Explore</div>
            <div className="navbar-item">About Us</div>
            <div className="navbar-item">Wallet</div>
        </div>
    )
}