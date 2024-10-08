import {
  BellIcon,
  KanbanIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  SquareKanbanIcon,
} from 'lucide-react';
import Link from 'next/link';

import Logo from '../../../public/logo.svg';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboardIcon },
  { href: '/new-task', label: 'Project', icon: KanbanIcon },
  { href: '/in-progress', label: 'Activity', icon: SquareKanbanIcon },
  { href: '/completed', label: 'Notification', icon: BellIcon },
  { href: '/completed', label: 'Setting', icon: SettingsIcon },
];

export default function SideNav() {
  return (
    <div className=' w-[180px] h-screen px-4 py-6  shadow-md'>
      <div className='mb-8'>
        <Link
          href='/dashboard'
          className='text-xl font-semibold uppercase flex items-center gap-2'
        >
          <Logo />
          TaskMe
        </Link>
      </div>
      <div className=' text-muted-foreground'>
        <ul>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className='flex items-center my-4   hover:text-primary hover:bg-violet-100 rounded-md'
            >
              <Link
                href={link.href}
                className='flex gap-2 p-2 '
              >
                {<link.icon />}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
