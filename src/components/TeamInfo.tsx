import React from "react";

interface TeamInfoProps {
  teamName: string;
  imageUrl?: string;
}

const TeamInfo: React.FC<TeamInfoProps> = ({ teamName, imageUrl }) => {
  return (
    <div className="flex flex-col space-y-2">
      <img
        src={imageUrl || "https://via.placeholder.com/100"}
        alt={`logo`}
        className="w-20 h-16 rounded-full md:w-24"
      />
      <p>{teamName}</p>
    </div>
  );
};

export default TeamInfo;
