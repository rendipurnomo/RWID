import { IoSchoolSharp } from 'react-icons/io5';
import { HiArrowCircleRight } from 'react-icons/hi';
import { BiLogoZoom } from 'react-icons/bi';
import {SiTeamspeak} from 'react-icons/si';
import {PiComputerTower} from 'react-icons/pi';
import { SiCanva } from 'react-icons/si';

const Card = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-between rounded shadow-main py-2 px-4 bg-white">
      <div className="flex items-center gap-2">
        {icon == 'zoom' ? (
          <IconZoom />
        ) : icon == 'udemy' ? (
          <IconEducation />
        ) : icon == 'english' ? (
          <IconEnglish />
        ) : icon == 'vps' ? (
          <IconVps/>
        ): icon == 'canva' ? (
          <IconCanva />
        ):null}
        <h3 className="text-md md:text-lg font-medium mb-2">{title}</h3>
      </div>
      <div>
        <HiArrowCircleRight className="w-6 h-6 text-green-500" />
      </div>
    </div>
  );
};

export default Card;

const IconZoom = () => {
  return (
    <BiLogoZoom className="w-12 h-12 text-green-500 p-2 bg-green-100 rounded-md" />
  );
};
const IconEducation = () => {
  return (
    <IoSchoolSharp className="w-12 h-12 text-green-500 p-2 bg-green-100 rounded-md" />
  );
};
const IconEnglish = () => {
  return (
    <SiTeamspeak className="w-12 h-12 text-green-500 p-2 bg-green-100 rounded-md" />
  );
};

const IconVps =()=>{
  return (
    <PiComputerTower className="w-12 h-12 text-green-500 p-2 bg-green-100 rounded-md" />
  );
}

const IconCanva =()=>{
  return (
    <SiCanva className="w-12 h-12 text-green-500 p-2 bg-green-100 rounded-md" />
  );
}
