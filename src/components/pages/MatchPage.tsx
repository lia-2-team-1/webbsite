import React from "react";
import FutureMatches from "../FutureMatches";
import Players from "../Players";
import Match from "../Match";

export default function MatchPage() {
  return (
    <>
      <Match />
      <Players />
      <FutureMatches />
    </>
  );
}
