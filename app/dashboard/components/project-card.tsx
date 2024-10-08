import { Clock } from 'lucide-react';

export default function ProjectCard() {
  return (
    <div className='mt-6 p-4 sm:p-6 shadow-2xl  rounded-md w-64 lg:w-80 bg-gray-900 cursor-pointer hover:scale-105 transition-all'>
      <div className='text-muted-foreground text-xs flex gap-2'>
        <p className='bg-gray-600 py-[1.2px] px-1 rounded-sm'>Programing</p>
        <p className='bg-gray-600 py-[1.2px] px-1 rounded-sm text-red-400'>
          High
        </p>
      </div>
      <h3 className='text-xl font-semibold mt-2'>Web Development</h3>
      <p className='text-muted-foreground text-xs mt-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus,
        sit etiam in.
      </p>
      <div className='py-4'>
        <div className='flex justify-between text-sm'>
          <h2>Progress</h2>
          <h2>75%</h2>
        </div>
        <div className='bg-gray-600 w-full h-2 rounded-md mt-2'>
          <div className='bg-primary h-full w-3/4 rounded-md'></div>
        </div>
      </div>

      <div className='flex gap-2 text-muted-foreground pt-4'>
        <Clock className='' />
        <p>2 Days ago</p>
      </div>
    </div>
  );
}
