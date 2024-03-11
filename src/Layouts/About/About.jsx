import AboutText from "../../Componants/AboutText";
import LinkCard from "../../Componants/LinkCard";
import "./assets/About.css";
import { FiArrowUpRight } from "react-icons/fi";

function About() {
  const myEmail = "xyzfiham@gmail.com";
  const urltoMail = `mailto:${myEmail}`;

  const urltoPortfolio = "https://iamfiham.github.io/portfolio/";

  return (
    <div className="about">
      <AboutText />
      <div className="link-cards-div">
        <LinkCard tag="Location">Colombo, Srilanka</LinkCard>
        <LinkCard tag="Portfolio" onClick={urltoPortfolio}>
          iamfiham.github.io <FiArrowUpRight />
        </LinkCard>
        <LinkCard tag="Email" onClick={urltoMail}>
          xyzfiham@gmail.com <FiArrowUpRight />
        </LinkCard>
      </div>
    </div>
  );
}

export default About;
