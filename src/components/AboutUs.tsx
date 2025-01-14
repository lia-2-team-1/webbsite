import Button from './Button.tsx';
interface AboutUsProps {
    header: string;
    p: string;
    src: string;
}

export default function AboutUs({header, p, src}: AboutUsProps) {
    const initProps: AboutUsProps[] = {
        header:  "Trandareds IF",
        p: "I hjärtat av Borås blomstrar en nyskapad förening som inte bara siktar på att utmärka sig på planen, utan också strävar efter att vara en positiv kraft i samhället. Trandareds IF ska inte bara vara en idrottsförening, utan en plattform för engagemang, gemenskap och lokalt samhällsansvar.",
        src: "https://placehold.co/600x400",
    }
    return(
        <>
        <div className="
            w-screen
            bg-[#333333]
            flex flex-col md:flex-row
            place-content-center
            mx-auto p-3 md:gap-x-5
        ">
            <div className="
                block
                max-w-md 
                mx-auto md:mx-0
                font-segoeui
                text-sandybrown
            ">
                <h2 className="
                    text-xl 
                ">{initProps.header}</h2>
                <p className="
                    text-base 
                ">{initProps.p}</p>
                <div className="
                w-max
                mx-auto
                hidden 
                md:block md:pt-2
                ">
                <Button isLink={true} text="Läs mer!"></Button>
                </div>
            </div>
            <img 
             src={`${initProps.src}`}
             className="
                max-w-md
                mx-auto
                py-2
                md:mx-0
             "
            /> 
            <div className="
                w-max
                mx-auto
                sm:hidden
            ">
                <Button isLink={true} text="Läs mer!"></Button>
            </div>
        </div>
        </>
    )   
}
