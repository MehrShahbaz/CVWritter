import { Outlet } from 'react-router-dom';

import CustomNavbar from 'components/shared/Navbar/Navbar';

const Layout = (): JSX.Element => (
  <div>
    <CustomNavbar />
    <div className="bg-gray-100 h-screen">
      <Outlet />
    </div>
  </div>
);

export default Layout;
