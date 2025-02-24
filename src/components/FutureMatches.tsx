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
  result: string;
  venueName: string;
  venueLocality: string;
  venueAddress: string;
  isPostponed: boolean;
  isCancelled: boolean;
  isAbandoned: boolean;
}
const FutureMatches = () => {
  const [matches, setMatches] = useState<FutureMatches[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split("T")[0];
  const fromDate = "2022-01-01";
  const toDate = "2030-12-31";

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          `https://forening-api.svenskfotboll.se/club/upcoming-games?from=${fromDate}&to=${toDate}&w=3&take=1000&includeCanceled=true`,
          {
            method: "GET",
            headers: {
              ApiKey: import.meta.env.VITE_FOGIS_API_KEY || "",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMatches(data.games.slice(0, 4));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [fromDate, toDate]);

  return (
    <div className="bg-brandy dark:bg-mineshaft">
      <SectionHeading text="Kommande matcher" />
      <LoadingAndErrorMatch loading={loading} error={error} />
      {!loading && !error && (
        <>
          {matches.length > 0 ? (
            matches.map((match) => (
              <div className="flex justify-center" key={match.gameId}>
                <div
                  className="bg-wheat dark:bg-black flex text-black dark:text-sandybrown flex-col m-5 w-80 justify-center items-center p-5"
                  key={match.gameId}
                >
                  <h3>
                    {match.homeTeamName} - {match.awayTeamName}
                  </h3>
                  <p>{match.time}</p>
                  <p>{match.competitionName}</p>
                  <p>
                    {match.venueName}, {match.venueLocality}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Inga matcher funna</p>
          )}
          <div className="flex justify-center pb-10">
            <Button isLink={false} text="LADDA FLER" />
          </div>
        </>
      )}
    </div>
  );
};

export default FutureMatches;
