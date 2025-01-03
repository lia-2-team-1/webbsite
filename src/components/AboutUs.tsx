import Button from './Button.tsx';
interface AboutUsProps {
    header: string;
    p: string;
    src: string;
}

export default function AboutUs({header, p, src}: AboutUsProps) {
    const initProps: AboutUsProps[] = {
        header:  "Trandareds IF",
        p: "Lorem Mauris vitae ex varius, pharetra eros sit amet, dignissim justo. Quisque sollicitudin facilisis nunc, eu ultricies dui commodo sed. Suspendisse vel sollicitudin velit. Sed purus neque, pretium vulputate ultricies vitae, scelerisque eu erat. Duis ultricies metus nunc, eget imperdiet ligula bibendum et. Sed quis felis magna. Morbi maximus sapien id convallis gravida. Aenean at justo vestibulum, iaculis mi quis, malesuada sapien. Integer ut ligula enim. Integer id turpis eu sem luctus consequat. Nunc semper lectus sed tincidunt fermentum. ",
        src: "", 
    }
    return(
        <>
        <div className="
            flex
            mx-auto 
            place-content-center
        ">
            <div className="
                block
                max-w-md 
            ">
                <h2 className="
                    tailwind here
                ">{initProps.header}</h2>
                <p className="
                    tailwind here
                ">{initProps.p}</p>
                <div className="
                    
                ">
                <Button isLink={true} text="Om Oss"></Button>
                </div>
            </div>
            <img 
             src={`${initProps.src}`}
             className="
                max-w-md
             "
            /> 
        </div>
        </>
    )   
}
