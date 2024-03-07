import AboutText from "../../Componants/AboutText";
import LinkCard from "../../Componants/LinkCard";
import "./assets/About.css";

function About() {
  return (
    <div className="about">
      <AboutText />
      <div className="link-cards-div">
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </div>
  );
}

export default About;
