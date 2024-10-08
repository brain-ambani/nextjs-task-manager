import LatestProjects from './latest-projects';
import MyTasks from './my-tasks';
export default function Mainboard() {
  return (
    <div className='max-w-6xl'>
      <LatestProjects />
      <MyTasks />
    </div>
  );
}
