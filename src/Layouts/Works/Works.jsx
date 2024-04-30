import ProjectCard from '../../Componants/ProjectCard';
import './assets/Works.scss';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import {useRef} from 'react';
import note from './assets/note.png';
import portfolio from './assets/portfolio.png';
import ecommerce from './assets/ecommerce.png';

gsap.registerPlugin(ScrollTrigger);

function Works() {
  const cardRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      image: note,
      heading: 'Note Taking App',
      subHeading: ' Built with React for Seamless User Experience and Efficient Information Organization',
      url: 'https://iamfiham.github.io/note-taking-app/',
    },
    {
      id: 2,
      image: ecommerce,
      heading: 'E-Commerce Website',
      subHeading: 'Leveraging React and Firebase for Dynamic Shopping Experiences and Seamlessly Managed Transactions',
      url: 'https://iamfiham.github.io/e-commerce/',
    },
    {
      id: 3,
      image: portfolio,
      heading: 'Portfolio Site',
      subHeading: 'Crafted with React for a Dynamic and Engaging Presentation of Skills and Projects',
      url: 'https://iamfiham.github.io/portfolio/',
    },
  ];

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: '0% 70%',
        end: '100% 20%',
        // scrub: 1,
        scrub: false,
        markers: false,
        // pin: true,
        toggleActions: 'play reverse play reverse',
      },
    });

    tl.fromTo(cardRef.current.children, {y: 30, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1, ease: 'power4.out', stagger: 0.15});
  }, {});

  return (
    <div className='works'>
      <h3>Recent works</h3>
      <div className='project-cards' ref={cardRef}>
        {projectsData.map((data) => (
          <ProjectCard key={data.id} image={data.image} heading={data.heading} subHeading={data.subHeading} url={data.url} />
        ))}
      </div>
    </div>
  );
}

export default Works;
