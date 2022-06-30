import { NextPage } from 'next';
import Image from 'next/image';

import { Header } from '../src/components';

import maybeCheese from '../public/images/projects/maybe-cheese.png';
import cocosTrees from '../public/images/projects/cocos-trees.png';

const projects = [
  {
    title: 'Maybe Cheese Born With It',
    href: 'https://www.maybecheesebornwithit.com',
    description: 'Website redesign and development.',
    imgSrc: maybeCheese,
  },
  {
    title: "CoCo's Tree & Lawn Service",
    href: 'https://www.cocostreeservice.com',
    description: 'Design and development.',
    imgSrc: cocosTrees,
  },
];

const ProjectsPage: NextPage = () => {
  return (
    <div>
      <Header
        subtitle='Projects'
        title="Check out the custom sites we've created"
        description="We know, it's pretty empty around here. We'd love for you to help change that!"
      />
      <main>
        <div className='mt-16 lg:mt-24 relative pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8'>
          <div className='relative max-w-7xl mx-auto'>
            <div className='max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
              {projects.map((project) => (
                <div
                  key={project.title}
                  className='flex flex-col rounded-lg shadow-lg overflow-hidden'
                >
                  <div className='p-4 flex-shrink-0 bg-zinc-900'>
                    <Image
                      className='h-48 w-full object-cover'
                      src={project.imgSrc}
                      alt=''
                    />
                  </div>
                  <a
                    href={project.href}
                    target='_blank'
                    rel='noreferrer'
                    className='group'
                  >
                    <div className='flex-1 bg-zinc-900 px-6 pb-6 flex flex-col justify-between'>
                      <div className='flex-1'>
                        <p className='text-xl font-semibold text-zinc-900 group-hover:!text-primary-600 transition'>
                          {project.title}
                        </p>
                        <p className='mt-3 text-base text-zinc-500'>
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ProjectsPage;
