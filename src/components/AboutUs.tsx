import Button from "./Button.tsx";
import SectionHeading from "./SectionHeading.tsx";

interface AboutUsProps {
  src: string;
}

export default function AboutUs({ src }: AboutUsProps) {
  const initProps: AboutUsProps = {
    src: "https://placehold.co/600x400",
  };
  return (
    <>
      <div className=" bg-brandy dark:bg-mineshaft pb-5">
        <div
          className="
          max-w-screen  
          
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
          w-full
          lg:max-w-screen-lg
          p-3 md:p-5  
          gap-x-0 md:gap-x-5  
        "
        >
          <img
            src="/tif-team.jpg"
            className="

          w-full 
          md:w-1/2 
          lg:w-[600px] md:h-auto
          mx-auto 
          md:mx-0 
          object-cover 
          
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
              vara en positiv kraft i samhället. Trandareds IF ska inte bara
              vara en idrottsförening, utan en plattform för engagemang,
              gemenskap och lokalt samhällsansvar.
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
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
