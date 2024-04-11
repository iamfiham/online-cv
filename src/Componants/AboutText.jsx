import "./assets/Components.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function AboutText() {
  useGSAP(() => {
    gsap.fromTo(
      ".note",
      {
        y: 30,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
      },
      { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, ease: "power4.out", stagger: 0.1 }
    );
  }, {});

  return (
    <div className="about-text">
      <h3>About me</h3>
      <div className="notes">
        <p className="note">
          Passionate Frontend Developer in Sri Lanka!, specializing in React and Next.js, with a newfound expertise in
          integrating Firebase backend services into client projects. My passion lies in crafting exceptional user
          experiences and interfaces using the latest frontend technologies, coupled with robust backend solutions.
        </p>
        <p className="note">
          My journey in frontend development has equipped me with the skills to build responsive and dynamic web
          applications that elevate user engagement and satisfaction. I thrive on tackling complex challenges, turning
          ideas into polished digital experiences that exceed expectations.
        </p>
        <p className="note">
          In addition to my front-end skills, adept at integrating Firebase backend services, including authentication,
          real-time databases, Firestore and cloud storage ensure secure and efficient data management.
        </p>
        <p className="note">
          As a dedicated member of the frontend development community, I take pride in pushing the boundaries of digital
          innovation. I'm excited to continue contributing to this ever-evolving field, leveraging both frontend and
          backend technologies, including Firebase, to create impactful solutions.
        </p>
      </div>
    </div>
  );
}

export default AboutText;
