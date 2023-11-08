import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SideNavBar from '../components/SideNavBar';

function Layout() {
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNavBar />
        </div>
        <div className="bg-[#F6F7F9] w-full">
        <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Layout;
