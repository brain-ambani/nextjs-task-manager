import { User2Icon } from 'lucide-react';

export default function UserButton() {
  return (
    <div className='flex items-center rounded-md cursor-pointer gap-1 p-2 hover:bg-slate-200'>
      <div className='bg-violet-300 rounded-full p-2'>
        <User2Icon />
      </div>
      <div className='gap-1 pl-2'>
        <p className=' text-xs text-primary'>Good morning</p>
        <h3 className='font-semibold'>Brain</h3>
      </div>
    </div>
  );
}
