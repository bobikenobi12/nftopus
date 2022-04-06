import { Navbar } from "./NavBar";
import "../App.css";
import "../css/Home.css";

export const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="home">
            <h1 className="home-mainText">Discover and mint extraordinary NFTs</h1>
            <h3 className="home-secondaryText">Nftopus is the world's first and largest NFT marketplace </h3>
        </div>
        </>
    );
}