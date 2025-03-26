import React, { useEffect } from "react";
import Hero from "../Hero";
import AboutUs from "../AboutUs";
import SponsorSection from "../SponsorSection";
import News from "../News";
import Match from "../Match";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => { }
  }, []);
  return (
    <>
      <Hero />
      <AboutUs />
      <News variant="frontpage" />
      <Match />
      <SponsorSection />
    </>
  );
}
