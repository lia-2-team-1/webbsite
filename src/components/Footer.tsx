interface FooterProps {

}

export default function Footer({}: FooterProps) {
    return(
        <>
            <footer className="">
                <div className="
                    flex
                    place-content-center
                    gap-10
                ">
                    <div className="flex flex-col">
                        <h5>HITTA HIT</h5>
                        <p>Fotbollsgatan 25</p>
                        <p>123 45 Sportstad</p>
                        <a href="#">Karta</a>
                    </div>
                    <div className="flex flex-col">
                        <h5>NAVIGERA</h5>
                        <a>Hem</a>
                        <a>Schema</a>
                        <a>Om Oss</a>
                        <a>Matcher</a>
                        <a>Nyheter</a>
                        <a>Tider</a>
                    </div>
                    <div className="flex flex-col">
                        <h5>SPONSORER</h5>
                        <a>Craft of Scandinavia</a>
                        <a>Baker Logistics</a>
                        <a>FB Cargo</a>
                        <a>PLUS Margret</a>
                    </div>
                    <div className="flex flex-col">
                        <h5>FÖLJ OSS</h5>
                        <img />
                    </div>
                    <div className="flex flex-col">
                        <h5>POLICIES</h5>
                        <a>Kakor</a>
                        <a>Integritet</a>
                        <a>Vilkor</a>
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
