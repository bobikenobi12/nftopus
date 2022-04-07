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
            Сайт за mint-ване на наша собствена колекция от NFT-та на име
            Octopus Bay. Аксесоарите на колекцията се разделят на осем вида,
            като всеки елемент от тях е с различна рядкост.
          </h1>
          <h1 className="title">Our Team</h1>
          <div className="team">
            <div className="member">
              <TeamMember
                img={borislav}
                name={"Borislav Borisov"}
                description={
                  "Измислил идеята за проекта, качил готовите NFT-та в IPFS, направил уебсайта и интегрирал metamask в него."
                }
              />
            </div>
            <div className="member">
              <TeamMember
                img={martinov}
                name={"Gabriel Martinov"}
                description={
                  "Работил по изработването на NFT колекцията.Измислил идеята и базовия модел на октопода. Направил презентацията и плаката към проекта. Подпомогнал за дизайна на уебсайта."
                }
              />
            </div>
            <div className="member">
              <TeamMember
                img={kris}
                name={"Kristian Kirilov"}
                description={
                  "Реализирал идеите за асети на екипа, измислил дизайна на октопода, генерирал NFT-та, изработил видео презентацията за журито"
                }
              />
            </div>
          </div>
        </div>
      </div>
      </>
  );
};
