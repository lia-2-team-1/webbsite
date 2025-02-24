import React from "react";
import LoadingAndErrorMatch from "./LoadingAndErrorMatch";
import SectionHeading from "./SectionHeading";

export default function FutureMatches() {
  const loading = true;
  const error = null;
  return (
    <div className="bg-brandy dark:bg-mineshaft">
      <SectionHeading text="Kommande matcher" />
      <LoadingAndErrorMatch loading={loading} error={error} />
    </div>
  );
}
