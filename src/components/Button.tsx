interface ButtonProps {
    text: String;
    linkTo: String;
    onClick: Function;
}

/* 
* @remarks
* A function to create an Anchor element styled as a button, with certain properties set.
* 
* @param Text - Visual text of the button
* @param LinkTo - Sets the href of the button
* @param OnClick - the onClick function of the button
*
* @returns A button with above parameters.
* 
* @beta
*/
export default function Button({text, linkTo, onClick}: ButtonProps) {


    return (
        <a href={linkTo}
        onClick={onClick}
        className="
            font-bold font-inter text-base uppercase
            py-2 px-10
            my-1 mx-3
            border-2 rounded-md border-transparent
            bg-black text-sandybrown
            hover:bg-[#3D3D3D] hover:text-springwood
            focus:bg-[#3D3D3D] focus:text-springwood
            active:bg-[#B0B0B0] active:text-black
            disabled:bg-[#888888] disabled:text-black
            visited:text-sandybrown
            transition-colors
            max-w-24
            max-h-8
        ">
        {text == null || "" ? "TEXT IS NULL"  : text}
        </a>
    )
}
