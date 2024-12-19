

interface ButtonProps {
    text: string;
    width?: string;
    isLink: boolean;
    linkTo?: string;
    func?: (e: React.MouseEvent<HTMLElement>) => void;
}


/* 
* @remarks
* A function to create an Anchor element styled as a button, with certain properties set.
* 
* @param text --- Displayed text.
* @param width? --- Width in Tailwind increments. Defaults to "fit".
* @param isLink --- Does this link to another page? (true/false)
* @param linkTo --- Target page. (Optional)
* @param func --- Function to do on click.
*
* @returns A Button or Anchor with above parameters.
* 
* @beta
*/
export default function Button({text, isLink, linkTo, func, width}: ButtonProps) {
        
        if (isLink) {
            return (
                <>
                <div className={`
                py-1 px-2
                my-1 mx-3
                border-4 rounded-md border-transparent
                bg-sandybrown text-black 
                hover:bg-[#3D3D3D] hover:text-springwood
                focus:bg-[#3D3D3D] focus:text-springwood
                focus:border-sandybrown
                active:bg-[#B0B0B0] active:text-black
                disabled:bg-[#888888] disabled:text-black
                transition-colors
                w-${!width ? "fit" : width} 
                `}>
                        <a href={`${linkTo}`} className="
                            font-bold font-inter uppercase
                            text-black
                            visited:text-black
                            text-center 
                        ">
                        {`${text}`}
                        </a>
                  </div>
                </>
            )
        }
        else {
            return(
                <>
                    <button type="button"
                    className={`
                    font-bold font-inter uppercase
                    visited:text-black
                    py-1 px-2
                    my-1 mx-3
                    border-4 rounded-md border-transparent
                    bg-sandybrown text-black
                    hover:bg-[#3D3D3D] hover:text-springwood
                    focus:bg-[#3D3D3D] focus:text-springwood
                    focus:border-sandybrown
                    active:bg-[#B0B0B0] active:text-black
                    disabled:bg-[#888888] disabled:text-black
                    transition-colors
                    text-center 
                    w-${!width ? "fit" : width}
                    `}

                    >{`${text}`}</button>
                </>
            )
        }
}
