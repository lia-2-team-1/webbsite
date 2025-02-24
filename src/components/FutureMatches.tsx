import React, { useEffect, useState } from "react";
import LoadingAndErrorMatch from "./LoadingAndErrorMatch";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

export interface FutureMatches {
  gameId: number;
  homeTeamName: string;
  awayTeamName: string;
  homeTeamImageUrl: string;
  awayTeamImageUrl: string;
  timeAsDateTime: string;
  time: string;
  competitionName: string;
  venueName: string;
  venueLocality: string;
  venueAddress: string;
  isPostponed: boolean;
  isCancelled: boolean;
  isAbandoned: boolean;
}

const FutureMatches = () => {
  const [allMatches, setAllMatches] = useState<FutureMatches[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split("T")[0];
  const fromDate = today;
  const toDate = "2030-12-31";

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("./testdata.json", {
          method: "GET",
        });
        //   https://forening-api.svenskfotboll.se/club/upcoming-games?from=${fromDate}&to=${toDate}&w=3&take=1000&includeCanceled=true,
        //   {
        //     method: "GET",
        //     headers: {
        //       ApiKey: import.meta.env.VITE_FOGIS_API_KEY || "",
        //     },
        //   }
        // );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const futureGames = data.games.filter(
          (game: FutureMatches) =>
            new Date(game.timeAsDateTime) >= new Date(today)
        );
        setAllMatches(futureGames);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [today, fromDate, toDate]);

  const visibleMatches = allMatches.slice(0, visibleCount);
  const loadMoreMatches = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="bg-brandy dark:bg-mineshaft text-black dark:text-sandybrown grid grid-cols-1 gap-5">
      <SectionHeading text="Kommande matcher" />
      <LoadingAndErrorMatch loading={loading} error={error} />
      {!loading && !error && (
        <>
          {visibleMatches.length > 0 ? (
            visibleMatches.map((match) => (
              <div
                key={match.gameId}
                className="border-darkgrey border-2 m-auto rounded-lg w-4/5 lg:w-2/5 bg-wheat shadow-md hover:bg-brandy transition duration-300 dark:bg-mineshaft dark:hover:bg-gray-700"
              >
                <div className="flex-col p-5 m-auto">
                  <div className="flex justify-between items-center">
                    <img
                      src={match.homeTeamImageUrl}
                      alt={match.homeTeamName}
                      className="w-20 h-16"
                    />
                    <img
                      src={match.awayTeamImageUrl}
                      alt={match.awayTeamName}
                      className="w-20 h-16"
                    />
                  </div>
                  <div className="flex justify-between items-center text-base md:text-lg lg:text-xl font-semibold">
                    <h3>{match.homeTeamName}</h3>
                    <h3>{match.awayTeamName}</h3>
                  </div>
                  <div className="text-center">
                    <p>
                      <strong>Tid:</strong> {match.time}
                    </p>
                    <p>
                      <strong>Datum:</strong> {match.timeAsDateTime}
                    </p>
                    <p>
                      <strong>Serie:</strong> {match.competitionName}
                    </p>
                    <p>
                      <strong>Var:</strong> {match.venueName},{" "}
                      {match.venueLocality}
                    </p>
                    {match.isCancelled && (
                      <p>
                        <strong>Inställd:</strong> Ja
                      </p>
                    )}
                    {match.isPostponed && (
                      <p>
                        <strong>Förskjuten:</strong> Ja
                      </p>
                    )}
                    {match.isAbandoned && (
                      <p>
                        <strong>Match avbruten:</strong> Ja
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Säsongen är inte igång just nu</p>
          )}
          <div className="flex justify-center pb-10">
            {visibleCount < allMatches.length && (
              <Button isLink={false} text="LADDA FLER" func={loadMoreMatches} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FutureMatches;
