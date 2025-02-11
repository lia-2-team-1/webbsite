import Button from "./Button";

export const Hero = () => {
  return (
      <div className="
      h-screen w-full
      flex flex-col place-items-center 
      bg-cover bg-no-repeat md:bg-[url('/tif-hero.jpg')] bg-[url('/tif-hero-mobile.jpg')]">
        <div className="
            flex-col
            py-5  my-auto 
            w-3/4 md:w-3/5 lg:w-2/5 
            bg-sandybrown dark:bg-darkgray dark:bg-opacity-75 bg-opacity-75
            md:text-center
            text-nowrap
            rounded-md
        ">

          <h1

            className="text-center text-4xl lg:text-6xl text-mineshaft dark:text-sandybrown font-bold 

          px-1.5 lg:px-5"
          >
            Trandareds IF
          </h1>

          <p className="text-mineshaft dark:text-sandybrown text-center font-medium">

            Engagemang, gemenskap och framtid
          </p>
        </div>
        <div className="
           flex-col
            ptlr-3 
            w-3/4 md:w-3/5
        ">
            <div className="
                flex flex-col
                p-4
                pb-6
                w-full md:w-2/5 xl:w-1/5
                bg-sandybrown dark:bg-darkgray bg-opacity-75 dark:bg-opacity-75 
                text-nowrap
                rounded-tr-lg rounded-tl-lg
            ">
                <Button text="Stötta Oss!" isLink={true}/>
                <Button text="Bli Medlem!" isLink={true}/>
            </div>
        </div>
    </div>
  );
};

export default Hero;
