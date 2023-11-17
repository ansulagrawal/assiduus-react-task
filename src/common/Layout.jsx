import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SideNavBar from '../components/SideNavBar';
import { useEffect } from 'react';

function Layout() {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const activePath = pathname?.split('/')[1];

  useEffect(() => {
    if (activePath === '') {
      navigate('/dashboard');
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex w-screen overflow-hidden h-[calc(100vh-4rem)] flex-col md:flex-row">
        <div className="hidden md:block md:w-64">
          <SideNavBar />
        </div>
        <div className="bg-[#F6F7F9] w-screen h-full md:w-[calc(100vw-16rem)]">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Layout;
