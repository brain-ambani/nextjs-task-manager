import Board from './components/board';
import SideNav from './components/sidenav';

export default function Dashboard() {
  return (
    <div className='flex '>
      <SideNav />
      <Board />
    </div>
  );
}
