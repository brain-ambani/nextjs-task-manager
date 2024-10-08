import { CalendarDays, User2Icon } from 'lucide-react';

export default function Board() {
  return (
    <main className='flex-1 '>
      <div className=''>
        <div className='flex justify-between items-center py-6 px-6 '>
          <div>
            <input
              type='text'
              placeholder='Search project'
              className='border-1 w-80 md:w-96 text-primary bg-gray-100 rounded-md p-2 outline-none'
            />
          </div>
          <div className='flex items-center gap-4'>
            <div className='bg-gray-200 p-1  cursor-pointer rounded-full'>
              <CalendarDays />
            </div>
            <div className='flex items-center rounded-md cursor-pointer gap-1 p-2 hover:bg-slate-200'>
              <div className='bg-violet-300 rounded-full p-2'>
                <User2Icon />
              </div>
              <div className='gap-1 pl-2'>
                <p className=' text-xs text-primary'>Good morning</p>
                <h3 className='font-semibold'>Brain</h3>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h1>Main board</h1>
      </div>
    </main>
  );
}
