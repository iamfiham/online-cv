import AboutText from "../../Componants/AboutText";
import LinkCard from "../../Componants/LinkCard";
import "./assets/About.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function About() {
  const myEmail = "xyzfiham@gmail.com";
  const urltoMail = `mailto:${myEmail}`;

  const urltoPortfolio = "https://iamfiham.github.io/portfolio/";

  const linkCardsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      linkCardsRef.current.children,
      {
        y: 25,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, ease: "power4.out", stagger: 0.15 }
    );
  }, {});

  return (
    <div className="about">
      <AboutText />
      <div className="link-cards-div" ref={linkCardsRef}>
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
