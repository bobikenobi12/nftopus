import { Navbar } from "./NavBar";
import { Footer } from "./Footer";
import { Outlet, Link } from "react-router-dom";
import "../App.css";
import "../css/Home.css";

export const Home = () => {
  return (
    <>
    {/* <div className="bg-image"></div> */}
      <Navbar />
      <div className="separator"></div>
      <div className="home">
        <div className="home-left">
          <h1 className="home-mainText">
            Discover and mint extraordinary NFTs
          </h1>
          <h3 className="home-secondaryText">
            Nftopus is the world's first and largest NFT marketplace{" "}
          </h3>
          <Link to="/explore">
            <button className="home-button">Explore</button>
          </Link>
          <Link to="/about" className="home-about">
            <p>Learn more about Nftopus</p>
          </Link>
        </div>
        <Link to="/explore" className="home-right">
          <img src="../../images/199.png" alt="homepage picture" className="collection-picture"/>
          <div className="home-right-description">
            <img src="images/LOGO.png" alt="logo" />
            <p>Octopus Bay</p>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};
