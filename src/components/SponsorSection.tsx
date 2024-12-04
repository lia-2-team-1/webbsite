import { useState } from 'react';
import "./styles.css";

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
            SponsorLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mozilla_logo.svg/280px-Mozilla_logo.svg.png"
        },
        {
            SponsorName:"Penguin bros",
            SponsorLink:"https://www.linuxfoundation.org/",
            SponsorLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Linux_Foundation_logo_2013.svg/220px-Linux_Foundation_logo_2013.svg.png"
        }
    ];  
    const [sponsors, setSponsors] = useState(initSponsors);

    return(
        <>
        <div className="max-w-32"
        style={{display: 'flex', flex: '1 2 100px'}}>
        {sponsors.map((sponsor, i)=> {
            return (
                <div key={i} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">   
                <img
                src={`${sponsor.SponsorLogo}`}
                href={`${sponsor.SponsorLink}`}
                className=""
                // style={{maxWidth: '100px'}}
                />
                <h4 className="text-lg">
                {sponsor.SponsorName}
                </h4>
                </div>
            )
        })}
        </div>        </>)
} 
