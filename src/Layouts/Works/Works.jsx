import ProjectCard from "../../Componants/ProjectCard";
import "./assets/Works.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Works() {
  const cardRef = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "0% 70%",
        end: "100% 20%",
        // scrub: 1,
        scrub: false,
        markers: false,
        // pin: true,
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      cardRef.current.children,
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: "power4.out", stagger: 0.15 }
    );
  }, {});

  return (
    <div className="works">
      <h3>Recent works</h3>
      <div className="project-cards" ref={cardRef}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Works;
