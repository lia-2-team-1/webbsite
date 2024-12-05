import { useState } from 'react';
import "./../index.css";
/** 
* DONE:
* semi-modularity
* 
* TODO: 
* make logos fade out
*  make logos scroll right-left on their own
*  make logos loop when scrolling
*  finalize design
*
*  difficulties:
*  need the right sponsors & logos
*
 */
interface Sponsor {
    /**
        * @param SponsorName--- Sponsor name
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
            SponsorName:"Quad9",
            SponsorLink:"https://www.quad9.net/",
            SponsorLogo:"https://docs.quad9.net/images/quad9_logo_light.svg",
        },
        {
            SponsorName:"Mozilla",
            SponsorLink:"https://www.mozilla.org/",
            SponsorLogo:"https://upload.wikimedia.org/wikipedia/commons/d/d2/Mozilla_logo.svg"
        },
        {
            SponsorName:"Penguin bros",
            SponsorLink:"https://www.linuxfoundation.org/",
            SponsorLogo:"https://upload.wikimedia.org/wikipedia/commons/f/fd/Linux_Foundation_logo_2013.svg"
        }
    ];  
    const [sponsors, setSponsors] = useState(initSponsors);

    return( 
        <div className="w-full mx-auto flex place-content-center space-x-24 align-center"
        > {/** I want this */} 
        {sponsors.map((sponsor, i)=> {
            return (
                <> {/** to center these lil cards that this loop creates. */}
                <a key={i} className="max-w-64 w-64 h-32 my-auto p-3 
                bg-stone-800 
                border-2 rounded-md border-transparent"
                href={`${sponsor.SponsorLink}`}
                >
                <img
                src={`${sponsor.SponsorLogo}`}
                className="mx-auto h-16"
                />
                <h4 className="text-lg text-center mt-4 text-white ">
                {sponsor.SponsorName}
                </h4>
                </a>
                </>
            )
        })}
        </div>
    )       
} 
