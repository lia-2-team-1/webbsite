import React from "react";
import Hero from "../Hero";
import AboutUs from "../AboutUs";
import SponsorSection from "../SponsorSection";
import News from "../News";
import Match from "../Match";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <News />
      <Match />
      <SponsorSection />
    </>
  );
}
