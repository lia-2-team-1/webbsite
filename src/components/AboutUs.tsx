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
        src: "https://placehold.co/600x400",
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
                mr-2
            ">
                <h2 className="
                    font-segoeui
                    text-sandybrown text-bold
                ">{initProps.header}</h2>
                <p className="
                    font-segoeui
                    text-base text-sandybrown
                ">{initProps.p}</p>
                <div className="
                w-max
                mx-auto
                ">
                <Button isLink={true} text="Om Oss"></Button>
                </div>
            </div>
            <img 
             src={`${initProps.src}`}
             className="
                max-w-md
                ml-2
             "
            /> 
        </div>
        </>
    )   
}
