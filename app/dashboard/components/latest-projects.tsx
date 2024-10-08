import ProjectCard from './project-card';

export default function LatestProjects() {
  return (
    <div className='p-6 '>
      <div className='flex justify-between'>
        <h2 className='text-xl font-bold'>Latest Projects</h2>
        <p className='text-primary'>See all</p>
      </div>
      <div className='flex gap-4  justify-between sm:gap-8'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
