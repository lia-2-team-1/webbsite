interface ButtonProps {
    text: string;
    linkTo: string;
    onClick: Function;
    fSize: string;
}

/* 
* @remarks
* A function to create an Anchor element styled as a button, with certain properties set.
* 
* @param Text - Visual text of the button
* @param LinkTo - Sets the href of the button
* @param OnClick - the onClick function of the button
* @param fSize - the size of the font. sm/md/lg
* @returns A button with above parameters.
* 
* @beta
*/
export default function Button({text, linkTo, onClick, fSize}: ButtonProps) {
    return (
        <a href={linkTo}
        onClick={onClick}
        className="
            font-bold font-inter uppercase
            text-nowrap
            py-1 px-2
            my-1 mx-3
            border-4 rounded-md border-transparent
            bg-sandybrown text-black 
            hover:bg-[#3D3D3D] hover:text-springwood
            focus:bg-[#3D3D3D] focus:text-springwood
            focus:border-sandybrown
            active:bg-[#B0B0B0] active:text-black
            disabled:bg-[#888888] disabled:text-black
            visited:text-black
            transition-colors

            max-w-24
            max-h-8
        "
        style={{fontSize: fSize + 'rem'}}
        >
        {!text ? "TEXT IS NULL"  : text}
        </a>
    )
}
