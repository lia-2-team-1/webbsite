import React from "react";
import PageHeading from "./PageHeading";

export default function MatchInfoHeader() {
  return (
    <div className="bg-wheat dark:bg-codgray p-5">
      <PageHeading text="Matchinformation" />
      <div className="text-mineshaft dark:text-sandybrown flex flex-col pb-5 pt-5 mx-auto w-4/5 md:w-3/5 lg:w-2/5 ">
        <p>
          Välkommen till Trandareds IF Matchinfo – här hittar du allt om våra
          matcher! Från aktuella resultat till datum och platser för kommande
          matcher, så är detta din plats för att hänga med i resan. Med
          engagemang, gemenskap och passion tar vi oss an varje utmaning –
          tillsammans går vi mot nya mål! ❤️⚽️
        </p>
        <img src="" alt="" />
      </div>
    </div>
  );
}
