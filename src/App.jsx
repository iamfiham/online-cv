import { LazyLoadImage } from "react-lazy-load-image-component";
import "./App.scss";
import About from "./Layouts/About/About";
import Header from "./Layouts/Header/Header";
import Works from "./Layouts/Works/Works";
import Banner from "./assets/banner.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const coverImage = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      coverImage.current,
      {
        scale: 2,
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      {
        scale: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.inOut",
      }
    );
  }, {});
  return (
    <>
      <div className="cover-image">
        <img src={Banner} alt="banner" ref={coverImage} />
        {/* <LazyLoadImage
          src={Banner}
          alt="banner"
          effect="opacity"
          delayTime={3000}
          height="100%"
          width="100%"
          ref={coverImage}
        /> */}
      </div>
      <div className="container">
        <Header />
        <About />
        <Works />
      </div>
    </>
  );
}

export default App;
