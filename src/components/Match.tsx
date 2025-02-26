import React, { useState, useEffect } from "react";
import Button from "./Button.tsx";
import MatchCard from "./MatchCard.tsx";
import LoadingAndErrorMatch from "./LoadingandErrorMatch.tsx";
import SectionHeading from "./SectionHeading.tsx";

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

  const fromDate = "2024-01-01";
  const toDate = "2030-12-31";

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

        const sortedMatches = matches.sort(
          (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
        );

        setMatches(sortedMatches.slice(0, 4));
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ett okänt fel inträffade"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-brandy dark:bg-mineshaft">
      <div className="text-black pt-5 pb-5 mx-auto w-4/5 lg:w-2/5 overflow-hidden dark:text-sandybrown">
        <SectionHeading text="Senaste matcherna" />
        <LoadingAndErrorMatch loading={loading} error={error} />
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-5">
            {matches.map((match) => (
              <MatchCard key={match.gameId} match={match} />
            ))}
          </div>
        )}
        <div className="flex justify-center pb-5 pt-5 mx-auto">
          <Button isLink={true} linkTo={"/matches"} text={"FLER MATCHER"} />
        </div>
      </div>
    </div>
  );
};

export default Match;
