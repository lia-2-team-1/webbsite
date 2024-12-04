import { useState } from 'react';
import "./../index.css";

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
        <div className="inline-flex place-evenly"> {/** I want this */} 
        {sponsors.map((sponsor, i)=> {
            return (
                <> {/** to center these lil cards that this loop creates. */}
                <a key={i} className="max-w-64 mx-auto mx-5 w-64"
                href={`${sponsor.SponsorLink}`}
                >
                <img
                src={`${sponsor.SponsorLogo}`}
                className="mx-auto h-16"
                />
                <h4 className="text-lg text-center">
                {sponsor.SponsorName}
                </h4>
                </a>
                </>
            )
        })}
        </div>
    )       
} 
