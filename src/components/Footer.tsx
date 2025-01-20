import "./Footer.css";
interface FooterProps {
}

export default function Footer({}: FooterProps) {
    return(
        <>
            <footer className="
                bg-mineshaft
                pt-2
                
            ">
                <div className=" 
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
                ">
                    <div className="flex flex-col">
                        <h5
                        className="
                            text-sandybrown
                            font-bold
                        ">HITTA HIT</h5>
                        <p className="text-sandybrown">Fotbollsgatan 25</p>
                        <p className="text-sandybrown">123 45 Sportstad</p>
                        <a href="#">Karta</a>
                    </div>
                    <div className="flex flex-col">
                        <h5 
                        className="
                            text-sandybrown
                            font-bold
                        ">NAVIGERA</h5>
                        <a href="">Hem</a>
                        <a href="">Schema</a>
                        <a href="">Om Oss</a>
                        <a href="">Matcher</a>
                        <a href="">Nyheter</a>
                        <a href="">Tider</a>
                    </div>
                    <div className="flex flex-col">
                        <h5 
                        className="
                        
                            text-sandybrown
                            font-bold
                        "
                        >SPONSORER</h5>
                        <a href="">Craft of Scandinavia</a>
                        <a href="">Baker Logistics</a>
                        <a href="">FB Cargo</a>
                        <a href="">PLUS Margret</a>
                    </div>
                    <div className="flex flex-col">
                        <h5
                        className="
                        
                            text-sandybrown
                            font-bold
                        ">FÖLJ OSS</h5>
                        <a href="https://www.google.com">
                        <img src="/public/instagram.svg" className="w-1/2"/>
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <h5
                            className="
                            text-sandybrown
                            font-bold
                            ">POLICIES</h5>
                        <a href="">Kakor</a>
                        <a href="">Integritet</a>
                        <a href="">Vilkor</a>
                    </div>
                </div>
                <hr className="w-4/5 mx-auto border-sandybrown"/>
                <div className="mt-5 md:w-4/5 md:mx-auto">
                    <div className="flex flex-row">
                    <img src="/public/logo.webp" className="md:w-1/6"/>
                    <p className="my-auto text-sandybrown">Tillsammans bygger <br /> vi framtidens fotboll!</p>
                    </div>
                    <p className="text-center text-sandybrown pb-1">
                        © 2024-2025 Trandareds IF. Alla rättigheter förbehållna.
                    </p>
                </div>
            </footer>                
        </>
    )
}
