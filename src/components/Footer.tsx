import "./Footer.css";
interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <>
      <footer
        className="
                bg-sandybrown dark:bg-slate
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
              GENVÄGAR
            </h5>
            <a className="text-xs md:text-sm lg:text-base" href="/">
              Hem
            </a>
            <a className="text-xs md:text-sm lg:text-base" href="/matches">
              Matcher
            </a>
            <a className="text-xs md:text-sm lg:text-base" href="/news">
              Nyheter
            </a>
            <a className="text-xs md:text-sm lg:text-base" href="/contact">
              Kontakt
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
              SPONSORER
            </h5>
            <a
              className="text-xs md:text-sm lg:text-base"
              href="https://craftofscandinavia.com/"
              target="_blank"
            >
              Craft of Scandinavia
            </a>
            <a
              className="text-xs md:text-sm lg:text-base"
              href="https://bakerlogistics.se/"
              target="_blank"
            >
              Baker Logistics
            </a>
            <a
              className="text-xs md:text-sm lg:text-base"
              href="https://www.fb-cargo.se/"
              target="_blank"
            >
              FB Cargo
            </a>
            <a
              className="text-xs md:text-sm lg:text-base"
              href="https://margret.se/"
              target="_blank"
            >
              PLUS Margret
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
              FÖLJ OSS
            </h5>
            <a
              className="text-xs md:text-sm lg:text-base"
              href="https://www.instagram.com/trandaredsif/"
              target="_blank"
            >
              <img
                src="/Instagram_Glyph_Gradient.png"
                alt="Instagram"
                className="w-14 h-auto pt-1 mx-auto lg:mx-0"
              />
            </a>
          </div>
        </div>
        <hr className="w-4/5 mx-auto border-mineshaft dark:border-sandybrown" />
        <div className="mt-5 md:w-4/5 md:mx-auto">
          <div className="flex flex-row">
            <a href="/">
              <img src="/logo.webp" alt="Logo" className="w-1/5 md:w-1/6" />
            </a>
            <p className="my-auto text-mineshaft dark:text-sandybrown text-xs md:text-sm lg:text-base">
              Engagemang, gemenskap och framtid
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
