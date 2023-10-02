import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { LuArrowUpRightFromCircle } from 'react-icons/lu';
import FaQlist from '../../constant/FaQ';
import { Link } from 'react-router-dom';

const FaQ = () => {
  return (
    <section className="flex flex-col items-center md:pt-24 mb-10">
      <p className="text-lg font-medium text-green-600">F.A.Q</p>
      <h3 className="text-xl md:text-3xl font-bold text-center">
        Pertanyaan yang sering diajukan
      </h3>
      {FaQlist.map((item) => {
        return (
          <Qestion key={item.id} question={item.question} answer={item.answer} />
        );
      })}
      <button className="border text-green-600 border-green-600 rounded-md py-2 px-4 my-8">
        <Link to="/" className="flex items-center gap-2">
          <span>Lihat semua pertanyaan</span>
          <LuArrowUpRightFromCircle />
        </Link>
      </button>
    </section>
  );
};

export default FaQ;

const Qestion = ({ question, answer }) => {
  const [rotate, setRotate] = useState('rotate-0');
  const [show, setShow] = useState('hidden');
  const handleClick = () => {
    setShow(show === 'hidden' ? 'block' : 'hidden');
    setRotate(rotate === 'rotate-0' ? 'rotate-180' : 'rotate-0');
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="md:w-3/4 flex justify-between items-center border-b-2 border-gray-300 pb-2 mt-10 bg-green-50">
        <p className='text-md font-semibold'>{question}</p>
        <IoIosArrowDown
          className={`transition-all duration-300 ease-in-out ${rotate}`}
        />
      </button>
      <div className={`${show} md:w-3/4`}>
        <p className="text-gray-600 text-left mt-3">{answer}</p>
      </div>
    </>
  );
};
