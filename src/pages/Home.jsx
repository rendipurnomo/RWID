import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Cube from '../components/cube/Cube';
import Feature from '../components/Features/Feature';

const Home = () => {
  return (
    <>
    <section className="md:h-screen pt-24 md:flex justify-center items-center">
      <div className="flex max-md:flex-col gap-4">
        <div className="max-md:text-center md:w-1/2">
          <p className="text-lg md:text-xl md:tracking-wide font-bold mb-4 font-dela text-red-500">
            Welcome to RWID!
          </p>
          <h1 className="text-3xl md:text-5xl md:leading-normal font-bold mb-4 font-dela">
            Let’s Make Indonesia as World <span className='text-red-600'>#1</span> Remote Worker Provider
          </h1>
          <p className="text-gray-600 mb-6">
            RWID adalah komunitas belajar segala skill yang kamu butuhkan untuk
            menembus remote work dengan support lifetime: sehingga kamu tidak
            perlu mengkhawatirkan batas waktu belajar. Kamu bisa bergabung dari
            SMA, kuliah atau kerja. Kamu juga bisa bergabung dari tanpa skill:
            kamu akan diarahkan ke skill-skill yang sesuai demand Remote Work!
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-green-500 px-8 py-3 rounded-md text-white font-medium hover:bg-green-600 transition-all duration-300 ease-in-out shadow-main">
              <Link className="flex items-center gap-2" to="/">
                <BsWhatsapp />
                <span>Konsultasi Gratis</span>
              </Link>
            </button>
          </div>
        </div>
        <div className='md:w-1/2 flex justify-center h-60 sm:h-96 items-center'>
          <Cube />
        </div>
      </div>
    </section>
    <Feature />
    </>
  );
};

export default Home;
