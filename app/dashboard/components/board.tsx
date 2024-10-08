import { Calendar, User2Icon } from 'lucide-react';

export default function Board() {
  return (
    <main className='flex-1 '>
      <div className=''>
        <div className='flex justify-between py-6 px-4 '>
          <div>
            <input
              type='text'
              placeholder='Search project'
              className='border-2 w-72 border-gray-200  rounded-md p-2 outline-none'
            />
          </div>
          <div className='flex items-center gap-4'>
            <div className='bg-muted-foreground p-1 cursor-pointer rounded-full'>
              <Calendar />
            </div>
            <div className='flex items-center gap-1'>
              <div>
                <User2Icon />
              </div>
              <div className='gap-1 pl-2'>
                <p className='text-muted-foreground text-xs'>Good morning</p>
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
