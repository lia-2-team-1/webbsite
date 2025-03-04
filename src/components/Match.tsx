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

interface MatchProps {
  showLoadMore?: boolean;
}

const Match = ({ showLoadMore = false }: MatchProps) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
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
        const fetchedMatches: Match[] = result.games.map((match: any) => ({
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

        const sortedMatches = fetchedMatches.sort(
          (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
        );

        setMatches(sortedMatches);
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

  const visibleMatches = matches.slice(0, visibleCount);

  const loadMoreMatches = () => {
    console.log("Before:", visibleCount, matches.length);
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="bg-brandy dark:bg-mineshaft">
      <div className="text-black pt-5 pb-5 mx-auto w-4/5 lg:w-2/5 overflow-hidden dark:text-sandybrown">
        <SectionHeading text="Senaste matcherna" />
        <LoadingAndErrorMatch loading={loading} error={error} />
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 gap-5">
              {visibleMatches.map((match) => (
                <MatchCard key={match.gameId} match={match} />
              ))}
            </div>

            {showLoadMore && visibleCount < matches.length && (
              <div className="flex justify-center pb-5 pt-5 mx-auto">
                <Button isLink={false} text={"LADDA FLER"} func={loadMoreMatches} />
              </div>
            )}

            {!showLoadMore && (
              <div className="flex justify-center pb-5 pt-5 mx-auto">
                <Button isLink={true} linkTo={"/matches"} text={"SE ALLA MATCHER"} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Match;
