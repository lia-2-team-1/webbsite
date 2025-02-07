import "./Footer.css";
interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <>
      <footer
        className="
                bg-brandy dark:bg-mineshaft
                pt-2 md:pt-4 lg:pt-6
            "
      >
        <div
          className=" 
                    flex
                    flex-col
                    text-center 
                    gap-5
                    py-10
                    md:gap-0
                    md:flex-row
                    md:justify-between
                    md:text-start
                    md:place-content-center
                    md:mb-4
                    md:w-4/5
                    md:mx-auto
                "
        >
          <div className="flex flex-col">
            <h5
              className="
                            text-mineshaft dark:text-sandybrown
                            font-bold
                            text-base
                            md:text-lg
                            lg:text-xl
                        "
            >
              HITTA HIT
            </h5>
            <p className="text-mineshaft dark:text-sandybrown text-xs md:text-sm lg:text-base">
              Fotbollsgatan 25
            </p>
            <p className="text-mineshaft dark:text-sandybrown text-xs md:text-sm lg:text-base">
              123 45 Sportstad
            </p>
            <a className="text-xs md:text-sm lg:text-base" href="#">Karta</a>
          </div>
          <div className="flex flex-col">
            <h5
              className="
                            text-mineshaft dark:text-sandybrown
                            font-bold
                            text-base
                            md:text-lg
                            lg:text-xl
                        "
            >
              NAVIGERA
            </h5>
            <a className="text-xs md:text-sm lg:text-base" href="">Hem</a>
            <a className="text-xs md:text-sm lg:text-base" href="">Schema</a>
            <a className="text-xs md:text-sm lg:text-base" href="">Om Oss</a>
            <a className="text-xs md:text-sm lg:text-base" href="">Matcher</a>
            <a className="text-xs md:text-sm lg:text-base" href="">Nyheter</a>
            <a className="text-xs md:text-sm lg:text-base" href="">Tider</a>
          </div>
          <div className="flex flex-col">
            <h5
              className="
                            text-mineshaft dark:text-sandybrown
                            font-bold
                            text-base
                            md:text-lg
                            lg:text-xl
                        "
            >
              SPONSORER
            </h5>
            <a className="text-xs md:text-sm lg:text-base" href="">Craft of Scandinavia</a>
            <a className="text-xs md:text-sm lg:text-base" href="">Baker Logistics</a>
            <a className="text-xs md:text-sm lg:text-base" href="">FB Cargo</a>
            <a className="text-xs md:text-sm lg:text-base" href="">PLUS Margret</a>
          </div>
          <div className="flex flex-col">
            <h5
              className="
                            text-mineshaft dark:text-sandybrown
                            font-bold
                            text-base
                            md:text-lg
                            lg:text-xl
                        "
            >
              FÖLJ OSS
            </h5>
            <a className="text-xs md:text-sm lg:text-base" href="https://www.google.com">
              <img
                src="/public/Instagram_Glyph_Gradient.PNG"
                alt="Instagram"
                className="w-14 h-auto pt-1 mx-auto lg:mx-0"
              />
            </a>
          </div>
          <div className="flex flex-col">
            <h5
              className="
                            text-mineshaft dark:text-sandybrown
                            font-bold
                            text-base
                            md:text-lg
                            lg:text-xl
                            "
            >
              POLICIES
            </h5>
            <a className="text-xs md:text-sm lg:text-base" href="">Kakor</a>
            <a className="text-xs md:text-sm lg:text-base" href="">Integritet</a>
            <a className="text-xs md:text-sm lg:text-base" href="">Vilkor</a>
          </div>
        </div>
        <hr className="w-4/5 mx-auto border-mineshaft dark:border-sandybrown" />
        <div className="mt-5 md:w-4/5 md:mx-auto">
          <div className="flex flex-row">
            <img
              src="/public/logo.webp"
              alt="Logo"
              className="w-1/5 md:w-1/6"
            />
            <p className="my-auto text-mineshaft dark:text-sandybrown text-xs md:text-sm lg:text-base">
              Tillsammans bygger <br /> vi framtidens fotboll!
            </p>
          </div>
          <p className="text-center text-mineshaft dark:text-sandybrown pb-1 text-xs md:text-sm lg:text-base">
            © 2024-2025 Trandareds IF. Alla rättigheter förbehållna.
          </p>
        </div>
      </footer>
    </>
  );
}
