import Button from './Button.tsx';
interface AboutUsProps {
    header: string;
    src: string;
}

export default function AboutUs({header, src}: AboutUsProps) {
    const initProps: AboutUsProps[] = {
        header:  "Trandareds IF",
        src: "https://placehold.co/600x400",
    }
    return(
        <>
        <h2 className="
        text-xl 
        text-center
        text-mineshaft dark:text-sandybrown
        bg-brandy dark:bg-mineshaft
        font-bold 
        pt-3
        ">{initProps.header}</h2>
        <div className="
        max-w-screen
        bg-brandy dark:bg-mineshaft
        flex flex-col md:flex-row-reverse
        place-content-center
        mx-auto p-3 md:gap-x-5
        ">
        <img 
        src={`${initProps.src}`}
        className="
        max-w-md
        md:w-xl md:max-w-screen
        mx-auto 
        md:mx-0
        "
        /> 
        <div className="
        text-mineshaft dark:text-sandybrown
        flex flex-col 
        max-w-md 
        md:w-xl md:max-w-screen
        mt-4
        mx-auto md:mx-0
        md:py-auto
        md:mt-0
        ">
        <p className="
        text-base 
        md:my-auto
        md:pr-6
        ">
        I hjärtat av Borås blomstrar en nyskapad förening som inte bara siktar på att utmärka sig på planen, utan också strävar efter att vara en positiv kraft i samhället. Trandareds IF ska inte bara vara en idrottsförening, utan en plattform för engagemang, gemenskap och lokalt samhällsansvar. 
                </p>
            <p className="text-base mt-4 md:my-auto md:pr-6">
        Välkommen till Trandareds IF, där vi inte bara spelar fotboll — vi förändrar liv.
                </p>
            <div className="
        w-full
        flex flex-col
        items-center
        ">
        <Button  isLink={true} text="Läs mer!"></Button>
        </div>
        </div>
        </div>
        </>
    )   
}
