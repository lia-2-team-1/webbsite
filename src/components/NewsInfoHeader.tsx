import React from "react";
import PageHeading from "./PageHeading";
import News from "./News";

export default function NewsInfoHeader() {
  return (
    <div className="bg-wheat dark:bg-codgray p-10">
      <PageHeading text="Senaste Nytt" />
      <div className="text-mineshaft dark:text-sandybrown flex flex-col lg:flex-row pb-5 pt-5 mx-auto w-full md:w-4/5 lg:max-w-screen-lg">
        <p className="pb-5 lg:pr-2">
          Vi fortsätter att sprida passion och skapa gemenskap, både på och
          utanför planen! Ta en titt på våra senaste Instagram-inlägg där vi
          delar matchhöjdpunkter, inspirerande ögonblick och framtidstro.
          Tillsammans når vi nya mål – med engagemang, värme och stolthet. Häng
          med oss och låt oss tillsammans forma en starkare framtid! ❤️⚽️
        </p>
        <img
          className="lg:w-[50%] md:w-auto w-auto h-auto"
          src="./public/tif-hero.jpg"
          alt="Trandareds IF - lagbild"
        />
      </div>
      <News variant="news" />
    </div>
  );
}
