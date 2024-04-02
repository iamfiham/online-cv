import "./assets/Components.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function ProjectCard() {
  const cardRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "0% 80%",
        end: "100% 20%",
        // scrub: 1,
        scrub: false,
        markers: false,
        // pin: true,
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(cardRef.current, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, ease: "power4.out", stagger: 0.5 });
  }, {});
  return <div className="project-card" ref={cardRef}></div>;
}

export default ProjectCard;
