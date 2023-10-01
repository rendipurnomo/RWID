import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {IoIosLogOut} from 'react-icons/io';
import FooterList1 from '../../constant/footerList';
import FooterList2 from '../../constant/footerList2';
import FooterList3 from '../../constant/footerList3';

const Footer = () => {
  return (
    <footer className="h-screen bg-green-50 main_container flex flex-col justify-around">
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-1/3">
          <h3 className="text-2xl font-medium mb-3">
            Mulailah Belajar Sekarang
          </h3>
          <p className="text-md text-gray-600 ">
            Mulailah belajar sekarang untuk memperoleh skill yang kamu butuhkan
            untuk menembus remote work
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-none px-8 py-3 rounded-md text-green-500 font-medium border-2 border-green-500 shadow-main">
            <Link to="/">Buat Akun</Link>
          </button>
          <button className="bg-green-500 px-8 py-3 rounded-md text-white font-medium hover:bg-green-600 transition-all duration-300 ease-in-out shadow-main">
            <Link className="flex items-center gap-2 justify-center" to="/">
              <FaWhatsapp />
              <span>Konsultasi Gratis</span>
            </Link>
          </button>
        </div>
      </div>

      <hr />

      <div className="flex justify-between">
        <div className="w-1/3 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <img
              className="w-12"
              src="/src/assets/images/rwid.png"
              alt="logo"
            />
            <h3 className="text-2xl font-bold">Remote Worker Indonesia</h3>
          </div>
          <p className="text-md text-gray-600 mb-4">
            RWID adalah komunitas belajar segala skill yang kamu butuhkan untuk
            menembus remote work dengan support lifetime: sehingga kamu tidak
            perlu mengkhawatirkan batas waktu belajar.
          </p>
          <button className="w-3/4 bg-gradient-to-r from-violet-500 to-red-500 text-white px-8 py-3 rounded-lg">
            <Link className="flex items-center justify-center gap-2" to="/">
              <FaInstagram /> <span>Ikuti kami di Instagram</span>
            </Link>
          </button>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-3">
              Perusahaan
            </h3>
            {FooterList1.map((item) => (
              <Link key={item.title} to={item.path} className="text-md text-gray-600 hover:text-green-500">{item.title}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-3">Peserta</h3>
            {FooterList2.map((item) => (
              <Link key={item.title} to={item.path} className="text-md text-gray-600 hover:text-green-500">{item.title}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-3">Bantuan</h3>
            {FooterList3.map((item) => (
              <Link key={item.title} to={item.path} className="text-md text-gray-600 hover:text-green-500 flex items-center gap-2">{item.title}<IoIosLogOut /></Link>
            ))}
          </div>
        </div>
      </div>
      <p className="text-md text-gray-600 text-center">
        © {new Date().getFullYear()} Remote Worker Indonesia
      </p>
    </footer>
  );
};

export default Footer;
