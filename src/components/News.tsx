import React from "react";
import { Button } from "button";

export const News = () => {
  return (
    <div>
      <h2>Nyheter</h2>
      <div className="flex flex-col lg:flex-row gap-10 ">
        <img className="w-80" src="tif-newsfeed.jpg" alt="soccer" />
        <img className="w-80" src="tif-newsfeed.jpg" alt="soccer" />
        <img className="w-80" src="tif-newsfeed.jpg" alt="soccer" />
        <img className="w-80" src="tif-newsfeed.jpg" alt="soccer" />
      </div>
    </div>
  );
};

export default News;
