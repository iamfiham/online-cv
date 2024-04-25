import Banner from '../assets/banner.webp';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import './assets/Components.scss';
// import { LazyLoadImage } from "react-lazy-load-image-component";

export function CoverImage() {
  const coverImage = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      coverImage.current,
      {
        scale: 2,
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      },
      {
        scale: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1,
        ease: 'power4.out',
      }
    );
  }, {});

  return (
    <div className='cover-image'>
      <img src={Banner} alt='banner' ref={coverImage} />
      {/* <LazyLoadImage
        src={Banner}
        alt="banner"
        effect="opacity"
        height="100%"
        width="100%"
        ref={coverImage}
      /> */}
    </div>
  );
}
