import React, { useState, useEffect } from "react";
import Button from "./Button.tsx";

export interface Match {
  gameId: number;
  homeTeamName: string;
  awayTeamName: string;
  goalsScoredHomeTeam: number;
  goalsScoredAwayTeam: number;
  time: string;
  competitionName: string;
  result: string;
  homeTeamImageUrl: string;
  awayTeamImageUrl: string;
}

const Match = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAllMatches, setShowAllMatches] = useState(false);

  const fromDate = "2024-01-01";
  const toDate = "2030-12-31";

  const fallbackMatches: Match[] = Array(4).fill({
    gameId: 0,
    homeTeamName: "Trandareds IF",
    awayTeamName: "Motståndarlag",
    goalsScoredHomeTeam: 0,
    goalsScoredAwayTeam: 0,
    time: "2024-01-01 00:00",
    competitionName: "Träningsmatcher Futsal",
    result: "0 - 0",
    homeTeamImageUrl: null,
    awayTeamImageUrl: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        const matches: Match[] = result.games.map((match: any) => ({
          gameId: match.gameId,
          homeTeamName: match.homeTeamName,
          awayTeamName: match.awayTeamName,
          goalsScoredHomeTeam: match.goalsScoredHomeTeam,
          goalsScoredAwayTeam: match.goalsScoredAwayTeam,
          time: match.time,
          competitionName: match.competitionName,
          result: match.result,
          homeTeamImageUrl: match.homeTeamImageUrl,
          awayTeamImageUrl: match.awayTeamImageUrl,
        }));


        const sortedMatches = matches.sort((a: Match, b: Match) =>
          new Date(b.time).getTime() - new Date(a.time).getTime()
        );

        setMatches(sortedMatches.slice(0, 4));
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        console.error("Error fetching data:", err);
        setMatches(fallbackMatches);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fromDate, toDate]);

  return (
    <div className="bg-sandybrown dark:bg-codgray" >
    <div className="bg-sandybrown text-black pt-5 pb-5 mx-auto w-full md:w-2/5 overflow-hidden dark:bg-codgray dark:text-sandybrown">
      <div className="text-2xl uppercase font-mono mb-5 text-center">Senaste matcherna</div>
      <div>
        {loading ? (
          <div className="text-center py-5">Laddar...</div>
        ) : error ? (
          <div className="text-center py-5">
            <p className="text-sandybrown mt-4">
              Kunde inte ladda matcherna just nu.
            </p>
            <p className="text-sandybrown">Försök igen senare!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {matches.map((match) => (
              <div
                key={match.gameId}
                className="border p-5 rounded-lg bg-sandybrown shadow-md hover:bg-brandy transition duration-300 dark:bg-darkgray dark:hover:bg-gray-700"
              >
                <div className="flex items-center justify-between space-x-6 w-full">
                  <div className="flex flex-col space-y-2">
                    <img
                      src={match.homeTeamImageUrl}
                      alt={`logo`}
                      className="w-24 h-16 rounded-full"
                    />
                    <p>{match.homeTeamName}</p> 
                  </div>
                  <h3 className="text-lg font-semibold text-center">
                    {match.goalsScoredHomeTeam}  - {match.goalsScoredAwayTeam}
                  </h3>

                  <div className="flex flex-col space-y-2">
                    <img
                      src={match.awayTeamImageUrl}
                      alt={`logo`}
                      className="w-24 h-16 rounded-full"
                    />
                    <p>{match.awayTeamName}</p>
                  </div>
                </div>


                <div className="text-center">
                  <p className="text-black-700 dark:text-gray-400">{new Date(match.time).toLocaleString()}</p>
                  <p className="text-black-800 dark:text-gray-300">{match.competitionName}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center pb-5 pt-5 mx-auto">
        <Button isLink={true} linkTo={"#"} text={"FLER MATCHER"} />
      </div>
    </div>
  </div>
  );
};

export default Match;
