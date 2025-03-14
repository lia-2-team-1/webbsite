import React from "react";
import FutureMatches from "../FutureMatches";
import Match from "../Match";
import MatchInfoHeader from "../MatchInfoHeader";

export default function MatchPage() {
  return (
    <>
      <MatchInfoHeader />
      <Match showLoadMore={true} />
      <FutureMatches />
    </>
  );
}
