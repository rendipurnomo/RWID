import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main_container bg-green-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
