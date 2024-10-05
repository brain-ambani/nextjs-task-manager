import { BookmarkFilledIcon } from '@radix-ui/react-icons';

export default function MainDashboard() {
  return (
    <div className='flex-1'>
      <div>
        <h1 className='text-2xl'>Daily design tools</h1>
        <p>All Tasks</p>
        <div>
          <ul className='flex gap-4'>
            <li>Board view</li>
            <li>Table view</li>
            <li>Calendar view</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
