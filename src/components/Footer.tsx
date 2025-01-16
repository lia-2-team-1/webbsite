import "./Footer.css";
interface FooterProps {
}

export default function Footer({}: FooterProps) {
    return(
        <>
            <footer className="
            ">
                <div className=" 
                    flex
                    flex-col
                    text-center 
                    md:flex-row
                    md:gap-10
                    md:text-start
                    md:place-content-center
                ">
                    <div className="flex flex-col">
                        <h5
                        className="
                            text-sandybrown
                            font-bold
                            font-segoeui
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
                            font-segoeui
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
                            font-segoeui
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
                            font-segoeui
                        ">FÖLJ OSS</h5>
                        <img />
                    </div>
                    <div className="flex flex-col">
                        <h5
                            className="

                            text-sandybrown
                            font-bold
                            font-segoeui
                            ">POLICIES</h5>
                        <a href="">Kakor</a>
                        <a href="">Integritet</a>
                        <a href="">Vilkor</a>
                    </div>
                </div>
                <hr/>
                <div>
                    logo
                </div>
                    copyright
            </footer>                
        </>
    )
}
