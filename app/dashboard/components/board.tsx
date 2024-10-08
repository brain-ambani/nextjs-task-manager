import { Calendar, User2Icon } from 'lucide-react';

export default function Board() {
  return (
    <main className='flex-1 '>
      <div className=''>
        <div className='flex justify-between py-6 px-6 '>
          <div>
            <input
              type='text'
              placeholder='Search project'
              className='border-1 w-72 text-primary bg-gray-100 rounded-md p-2 outline-none'
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
