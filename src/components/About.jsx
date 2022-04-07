import { Navbar } from "./NavBar";
import { TeamMember } from "./TeamMember";
import kris from "../kris.png";
import borislav from "../borislav.png";
import martinov from "../gabi.jpg";
import "../App.css";
import "../css/About.css";

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about-head">
          <div>
            <span className="about-head-span">Who we are</span>
            <h1 className="about-head-h1">
              Designers, thinkers & collaborators
            </h1>
          </div>
        </div>
        <div className="about-body">
          <h1 className="about-body-description">
            A website for minting our own collection of NFTs named Octopus Bay.
            The accessories of the collection are divided into eight types, as
            each element of them is of different rarity.
          </h1>
          <h1 className="title">Our Team</h1>
          <div className="team">
            <div className="member">
              <TeamMember
                img={borislav}
                name={"Borislav Borisov"}
                description={
                  "He came up with the idea for the project, uploaded the finished NFTs to IPFS, made the website and integrated metamask into it."
                }
              />
            </div>
            <div className="member">
              <TeamMember
                img={martinov}
                name={"Gabriel Martinov"}
                description={
                  "He worked on the NFT collection, drew the octopus model, made the presentation and the poster for the project, helped design the website."
                }
              />
            </div>
            <div className="member">
              <TeamMember
                img={kris}
                name={"Kristian Kirilov"}
                description={
                  "He worked on NFTs, generated a collection of 200, made a video for the project."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
