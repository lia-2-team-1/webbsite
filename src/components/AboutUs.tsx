import Button from "./Button.tsx";
import SectionHeading from "./SectionHeading.tsx";

interface AboutUsProps {
  src: string;
}

export default function AboutUs({ src }: AboutUsProps) {
  const initProps: AboutUsProps[] = {
    src: "https://placehold.co/600x400",
  };
  return (
    <>
      <div
        className="
          max-w-screen  
          bg-brandy dark:bg-mineshaft  
          place-content-center  
          mx-auto "
      >
        <SectionHeading text="Trandareds IF" />
      </div>
      <div
        className="
          max-w-screen  
          bg-brandy dark:bg-mineshaft  
          flex flex-col md:flex-row-reverse  
          place-content-center  
          mx-auto  
          p-3 md:p-5  
          gap-x-0 md:gap-x-5  
        "
      >
        <img
          src={`${initProps.src}`}
          className="

          md:w-xl md:max-w-screen  
          mx-auto md:mx-0  
        "
        />
        <div
          className="
        text-mineshaft dark:text-sandybrown  
          flex flex-col  
          max-w-md  
          md:w-xl md:max-w-screen  
          mt-4 md:mt-0  
          mx-auto md:mx-0  
        "
        >
          <p
            className="
            text-base 
            md:my-auto
            md:pr-6
            lg:text-lg
        "
          >
            I hjärtat av Borås blomstrar en nyskapad förening som inte bara
            siktar på att utmärka sig på planen, utan också strävar efter att
            vara en positiv kraft i samhället. Trandareds IF ska inte bara vara
            en idrottsförening, utan en plattform för engagemang, gemenskap och
            lokalt samhällsansvar.
          </p>
          <p className="text-base mt-4 md:my-auto md:pr-6 lg:text-lg">
            Välkommen till Trandareds IF, där vi inte bara spelar fotboll — vi
            förändrar liv.
          </p>
          <div
            className="
        w-full
        flex flex-col
        items-center
        "
          >
            <Button isLink={true} linkTo="/about" text="Läs mer!"></Button>
          </div>
        </div>
      </div>
    </>
  );
}
