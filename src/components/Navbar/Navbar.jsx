import Logo from '/src/assets/images/rwid.png';
import Navlist from '/src/constant/navList';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  const [border, setBorder] = useState('border-b-2 border-gray-200');
  const [shadow, setShadow] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      setBorder('border-none');
      setShadow('shadow-main');
    } else {
      setBorder('border-b-2 border-gray-200');
      setShadow('');
    }
  });

  return (
    <header
      className={`${shadow} backdrop-blur-2xl w-full main_container fixed z-20`}>
      <div>
        <nav
          className={`h-24 flex justify-between items-center relative ${border} border-b-2 border-gray-200`}>
          <Link to="/" className="flex items-center gap-2">
            <img className="w-10 sm:w-12" src={Logo} alt="RWID" />
            <div className="flex flex-col">
              <span className="text-md sm:text-xl md:text-2xl font-bold leading-4 sm:leading-5 md:leading-5">
                Remote Worker <br /> Indonesia
              </span>
            </div>
          </Link>
          {showMenu ? (
            <GrClose className="sm:hidden w-6 h-6" onClick={handleClick} />
          ) : (
            <RiMenu3Line className="sm:hidden w-6 h-6" onClick={handleClick} />
          )}
          <div
            className={`${
              showMenu
                ? 'max-sm:absolute top-20 left-0 right-0 bg-white max-sm:shadow-md shadow-gray-400 p-2 rounded-md sm:flex gap-8 items-center'
                : 'max-sm:absolute -top-52 left-0 right-0 bg-white max-sm:shadow-md shadow-gray-400 p-2 rounded-md'
            } sm:flex gap-8 transition-all duration-300 ease-in-out sm:bg-transparent`}>
            <div className="order-2 flex gap-4 max-sm:mb-3">
              <button className="bg-none px-6 py-2 rounded-md text-green-500 font-medium border-2 border-green-500 flex-grow">
                Daftar
              </button>
              <button className="bg-green-500 px-6 py-2 rounded-md text-white font-medium flex-grow">
                Masuk
              </button>
            </div>
            <ul className="flex max-sm:flex-col gap-2">
              {Navlist.map((item) => (
                <li
                  key={item.title}
                  className="text-md font-medium hover:text-green-500 transition duration-150 ease-in-out hover:first:underline hover:first:underline-offset-4 max-sm:bg-gray-200 p-2 rounded-md">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
