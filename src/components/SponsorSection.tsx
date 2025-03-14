import { useState } from "react";
import Button from "./Button.tsx";
import SectionHeading from "./SectionHeading.tsx";

/*
 *  DONE:
 *  semi-modularity
 *  spacing.
 *  Added the right sponsors.
 *  Added a CTA
 *
 *  TODON'T
 *  seamless loop. Doesn't work because of flex' space-around/-evenly/-etc properties changing gap size.
 *   *  I might look into this further later. For now I'm too angry.
 *  make logos scroll right-left on their own
 *  make logos fade out
 *
 *  TODO:
 *  Add missing button components.
 *  Fix text size, font, colour.
 *
 *  FUTURE TODO:
 *
 *  difficulties:
 *  Need button component
 *  Need global colour variables
 *  Need global text variables.
 */
interface Sponsor {
  /**
   * @param SponsorName --- Sponsor name
   * @param SponsorLink --- Sponsor link to webpage
   * @param SponsorLogo --- Sponsor logo url (.webp, .png or .svg)
   */
  SponsorName: string;
  SponsorLink: string;
  SponsorLogo: string;
}

export default function SponsorSection() {
  const initSponsors: Sponsor[] = [
    {
      SponsorName: "Intersport",
      SponsorLink: "https://www.intersport.se/",
      SponsorLogo: "intersport.WEBP",
    },
    {
      SponsorName: "+MARGRET",
      SponsorLink: "https://margret.se/",
      SponsorLogo: "plusmargret.png",
    },
    {
      SponsorName: "Craft of Scandinavia",
      SponsorLink: "https://www.craftofscandinavia.se/",
      SponsorLogo: "craft-neg.png",
    },
    {
      SponsorName: "FB Cargo",
      SponsorLink: "https://www.fb-cargo.se/",
      SponsorLogo: "fbcargo.png",
    },
    {
      SponsorName: "Baker Logistics",
      SponsorLink: "https://bakerlogistics.se/",
      SponsorLogo: "baker-logistics-neg.png",
    },
  ];
  const [sponsors, setSponsors] = useState(initSponsors);

  return (
    <>
      <div className="bg-wheat dark:bg-codgray">
        <div
          className=" 
        mx-auto 
        py-5
        w-full
        lg:max-w-screen-lg
        "
        >
          <SectionHeading text="Med stöd av" />
          <div
            className="
        flex flex-wrap
        space-x-8 p-4
        "
          >
            {sponsors.map((sponsor, i) => {
              return (
                <>
                  <a
                    key={i}
                    className="
                relative
                w-64 h-32  
                "
                    style={{ margin: "auto" }}
                    href={`${sponsor.SponsorLink}`}
                  >
                    <img
                      src={`${sponsor.SponsorLogo}`}
                      className="absolute 
                left-1/2 -translate-x-1/2 
                top-1/3 -translate-y-1/3 
                -mt-2 px-2 mx-auto max-h-16
                blur-xl opacity-[.60]
                hover:opacity-100 transition-opacity
                hidden dark:block
                "
                    />
                    <img
                      src={`${sponsor.SponsorLogo}`}
                      className="absolute 
                left-1/2 -translate-x-1/2 
                top-1/3 -translate-y-1/3 
                -mt-2 px-2 mx-auto max-h-16
                pointer-events-none
                drop-shadow-img dark:drop-shadow-none
                "
                    />
                    <h4
                      className="absolute
                left-1/2 -translate-x-1/2
                bottom-3 
                text-lg md:text-xl leading-5 
                font-mono font-bold uppercase 
                text-center text-nowrap text-mineshaft dark:text-sandybrown
                "
                    >
                      {sponsor.SponsorName}
                    </h4>
                  </a>
                </>
              );
            })}
          </div>
          <div className="text-center pb-5">
            <Button isLink={true} linkTo={"contact"} text="bli sponsor" />
          </div>
        </div>
      </div>
    </>
  );
}
