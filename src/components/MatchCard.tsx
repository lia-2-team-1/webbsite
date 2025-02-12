import React from "react";
import { Match } from "./Match.tsx";
import TeamInfo from "./TeamInfo.tsx";

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="border-2 p-5 rounded-lg bg-wheat shadow-md hover:bg-brandy transition duration-300 dark:bg-mineshaft dark:hover:bg-gray-700">
      <div className="text-xs flex items-center justify-between space-x-6 w-full md:text-base">
        <TeamInfo teamName={match.homeTeamName} imageUrl={match.homeTeamImageUrl} />
        <h3 className="text-sm font-semibold text-center lg:text-lg">
          {match.goalsScoredHomeTeam} - {match.goalsScoredAwayTeam}
        </h3>
        <TeamInfo teamName={match.awayTeamName} imageUrl={match.awayTeamImageUrl} />
      </div>
      <div className="text-center">
        <p className="text-sm text-black-700 dark:text-gray-400 lg:text-base">
          {new Date(match.time).toLocaleString()}
        </p>
        <p className="text-sm text-black-800 dark:text-gray-300 lg:text-base">{match.competitionName}</p>
      </div>
    </div>
  );
};

export default MatchCard;
