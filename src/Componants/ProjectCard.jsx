import {IoIosArrowRoundForward} from 'react-icons/io';

function ProjectCard({image, heading, subHeading, url}) {
  return (
    <div className='bg-neutral-50 border border-solid border-neutral-100 shadow-[0px_5px_10px_-2px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden group/card flex flex-col '>
      <div className='p-8 pb-0 flex flex-grow flex-col'>
        <h1 className='text-xl tracking-tight text-neutral-800 font-bold mb-4 leading-none'>{heading}</h1>
        <p className='text-sm text-neutral-400 mb-5'>{subHeading}</p>
        <a href={url} target='blank' className='mt-auto self-start'>
          <button className='text-blue-500 gap-2 text-xs flex items-center py-1 '>
            View Site <IoIosArrowRoundForward className='scale-150 fill-blue-500' />
          </button>
        </a>
      </div>
      <div className='aspect-[3/2] relative overflow-hidden mt-auto'>
        <div className='absolute w-full h-full z-20 bg-gradient-to-b from-neutral-50 to-transparent to-40% pointer-events-none' />
        <img
          src={image}
          alt=''
          className='border border-solid border-neutral-100 w-4/5 z-10 rounded-md object-top  object-cover absolute top-8 left-1/2 -translate-x-1/2 shadow-[-10px_15px_20px_-5px_rgba(0,0,0,0.07)] origin-top  group-hover/card:-translate-y-6 group-hover/card:-translate-x-[calc(50%+6px)] -rotate-[15deg] transition-all '
        />
      </div>
    </div>
  );
}

export default ProjectCard;
