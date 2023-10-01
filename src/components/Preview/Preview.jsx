import { GrPersonalComputer } from 'react-icons/gr';
import { RiQuestionAnswerLine } from 'react-icons/ri';

const Preview = () => {
  return (
    <>
      <section className=" sm:flex gap-7 pb-5 mb-10 border-b-2 border-gray-300">
        <div className="sm:w-2/3 mb-4 relative">
          <iframe
            src="https://www.loom.com/embed/20b2f38d169b49598f1c1b7736327937?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
            className="rounded-xl aspect-video w-full shadow-main"></iframe>
          <div className="absolute w-3 h-3 bg-red-500 rounded-full -top-4 left-4"></div>
          <div className="absolute w-3 h-3 bg-green-500 rounded-full -top-4 left-8"></div>
          <div className="absolute w-3 h-3 bg-yellow-500 rounded-full -top-4 left-12"></div>
        </div>
        <div className="sm:w-1/3 md:flex md:items-center">
          <div>
            <div className='flex max-sm:flex-col max-sm:items-center'>
              <GrPersonalComputer className="w-10 h-10 p-1 rounded-md mr-2" />
              <h3 className="text-lg md:text-3xl font-bold text-center mb-2 sm:text-left">
                Apa itu Remote Work?
              </h3>
            </div>
            <p className="text-gray-600 text-center sm:text-left">
              Kerja dari rumah ke perusahaan luar negeri dan di gaji dalam
              dollar, dengan menggunakan skill di bidang IT melalui beberapa
              website seperti Upwork, Fiverr dan RemoteOK.com. Tanpa
              mensyaratkan ijazah atau sertifikat apapun! Pelajari skill sesuai
              demand dan kuatkan personal brandingmu!
            </p>
          </div>
        </div>
      </section>
      <section className=" sm:flex gap-7 mb-10">
        <div className="sm:w-1/3 md:flex md:items-center mb-6">
          <div>
            <div className="flex max-sm:flex-col max-sm:items-center">
              <RiQuestionAnswerLine className="w-10 h-10 p-1 rounded-md mr-2" />
              <h3 className="text-lg md:text-3xl font-bold text-center mb-2 sm:text-left flex max-sm:flex-col max-sm:items-center">
                Ingin lebih memahami apa itu RWID?
              </h3>
            </div>
            <p className="text-gray-600 text-center sm:text-left sm:pl-9">
              Tapi punya waktu 50 menit ga? Kalau ada, dan kamu serius ingin
              bergabung dengan RWID, silahkan secara seksama simak video
              pemapaparan RWID dari Founder dan CEO RWID berikut ini.
            </p>
          </div>
        </div>

        <div className="sm:w-2/3 relative">
          <iframe
            src="https://www.loom.com/embed/0398433fd0184f92a648367ffac83406?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
            className="rounded-xl aspect-video w-full shadow-main"></iframe>
          <div className="absolute w-3 h-3 bg-red-500 rounded-full -top-4 left-4"></div>
          <div className="absolute w-3 h-3 bg-green-500 rounded-full -top-4 left-8"></div>
          <div className="absolute w-3 h-3 bg-yellow-500 rounded-full -top-4 left-12"></div>
        </div>
      </section>
    </>
  );
};

export default Preview;
