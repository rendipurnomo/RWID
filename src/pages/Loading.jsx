import React from 'react';

const Loading = () => {
  return (
    <>
      <div className="h-screen w-full bg-gray-700 absolute z-30 top-0 left-0">
        <div className="flex justify-center items-center h-screen flex-col gap-5">
          <h1 className="text-5xl font-bold text-white">
            Remote Worker Indonesia
          </h1>
          <div className="relative w-48 h-48 bg-transparent rounded-full border-2 border-slate-400 shadow-loader_1 flex justify-center items-center overflow-hidden before:content-[''] before:absolute before:border-dashed before:border-slate-400 before:inset-5 before:rounded-full before:border-2 before:bg-transparent before:shadow-loader_2 after:content-none after:absolute after:w-12 after:h-12 after:border-dashed  after:border-slate-400 after:rounded-full after:border-2 after:shadow-loader_2">
            <span className="absolute top-1/2 left-1/2 w-1/2 h-full bg-transparent origin-top-left animate-spin border-t-2 border-dashed border-slate-400 before:content-[''] before:absolute before:w-full before:h-full before:bg-green-400 before:origin-top-left before:-rotate-45 before:filter before:blur-lg before:drop-shadow-lg before:shadow-green-400"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
