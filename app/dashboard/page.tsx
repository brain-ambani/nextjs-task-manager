import { Nav } from './components/nav';
import MainDashboard from './components/mainDashboard';

export default function Dashboard() {
  return (
    <main className='p-8'>
      <h1 className='text-2xl'>Dashboard</h1>
      <div className='flex'>
        <Nav />
        <MainDashboard />
      </div>
    </main>
  );
}
