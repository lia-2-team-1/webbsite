import React from "react";
import { Button } from "button";

export const News = () => {
  return (
    <div className="mx-auto py-5 flex flex-col">
      <h2 className="uppercase font-mono text-center text-2xl font-bold text-sandybrown">
        Nyheter
      </h2>
      <div className="lg:w-[1200px] justify-center flex flex-col lg:flex-row gap-10 py-5 mx-auto">
        <div className="relative">
          <img className="w-60 h-auto" src="tif-newsfeed.jpg" alt="soccer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black via-transparent">
            <div className="absolute bottom-0 transform left-1/2 -translate-x-1/2 whitespace-nowrap">
              <h3 className="font-bold font-mono py-2 px-4 text-sandybrown text-xl">Senaste Nytt</h3>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="w-60 h-auto" src="tif-newsfeed.jpg" alt="soccer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black via-transparent">
            {" "}
            <div className="absolute bottom-0 transform left-1/2 -translate-x-1/2 whitespace-nowrap">
              <h3 className="font-bold font-mono py-2 px-4 text-sandybrown text-xl">Senaste Nytt</h3>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="w-60 h-auto" src="tif-newsfeed.jpg" alt="soccer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black via-transparent">
            {" "}
            <div className="absolute bottom-0 transform left-1/2 -translate-x-1/2 whitespace-nowrap">
              <h3 className="font-bold font-mono py-2 px-4 text-sandybrown text-xl">Senaste Nytt</h3>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="w-60 h-auto" src="tif-newsfeed.jpg" alt="soccer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black via-transparent">
            {" "}
            <div className="absolute bottom-0 transform left-1/2 -translate-x-1/2 whitespace-nowrap">
              <h3 className="font-bold font-mono py-2 px-4 text-sandybrown text-xl">Senaste Nytt</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
