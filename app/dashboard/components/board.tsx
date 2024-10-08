import { CalendarDays } from 'lucide-react';

import { ModeToggle } from '@/components/mode-toggle';
import Mainboard from './mainboard';
import ProjectOverview from './project-overview';

export default function Board() {
  return (
    <main className='flex-1 '>
      <div className='flex justify-between items-center py-6 px-6 '>
        <div>
          <input
            type='text'
            placeholder='Search project'
            className='border-1 w-80 md:w-96 text-primary placeholder-primary bg-gray-100 rounded-md p-2 outline-none'
          />
        </div>
        <div className='flex items-center gap-4'>
          <div className='bg-gray-200 p-1  cursor-pointer rounded-full'>
            <CalendarDays />
          </div>
          <ModeToggle />
        </div>
      </div>
      <hr />
      {/* main board */}
      <div className='flex p-6'>
        <Mainboard />
        <ProjectOverview />
      </div>
    </main>
  );
}
