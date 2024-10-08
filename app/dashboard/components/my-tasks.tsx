import Link from 'next/link';
import ProjectCard from './project-card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function MyTasks() {
  return (
    <div className='p-6'>
      <h2 className='pb-4'>My Tasks</h2>
      <div className='flex justify-between items-center pb-2'>
        <div className='flex gap-4 text-lg'>
          <Link
            href='/ongoing'
            className='text-primary hover:underline hover:font-bold cursor-pointer'
          >
            Ongoing
          </Link>
          <Link href='/in-review'>In Review</Link>
          <Link href='/pending'>Pending</Link>
          <Link href='/completed'>Completed</Link>
        </div>
        <div>
          <Button>
            <Plus /> Add Task
          </Button>
        </div>
      </div>
      <hr />
      <div className='flex gap-4 justify-between  sm:gap-6'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
