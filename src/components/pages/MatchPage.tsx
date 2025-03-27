import React, { useEffect } from "react";
import FutureMatches from "../FutureMatches";
import Match from "../Match";
import MatchInfoHeader from "../MatchInfoHeader";

export default function MatchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => { }
  }, []);
  return (
    <>
      <MatchInfoHeader />
      <Match showLoadMore={true} />
      <FutureMatches />
    </>
  );
}
