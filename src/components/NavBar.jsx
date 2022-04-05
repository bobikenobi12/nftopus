import "../css/Navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-item">Home</div>
            <div className="navbar-item navbar-item--browse">Browse Collection</div>
            <div className="navbar-item">About Us</div>
        </div>
    )
}