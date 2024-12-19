interface ButtonProps {
    text: string;
    fSize: string;

    isLink: boolean;

    linkTo?: string;
    func?: (e: React.MouseEvent<HTMLElement>) => void;
}

/* 
* @remarks
* A function to create an Anchor element styled as a button, with certain properties set.
* 
* @param text --- Displayed text.
* @param fSize --- Text size.
* @param isLink --- Does this link to another page? (true/false)
* @param linkTo --- Target page. (Optional)
* @param func --- Function to do on click.
*
* @returns A Button or Anchor with above parameters.
* 
* @beta
*/
export default function Button({text, fSize, isLink, linkTo, func}: ButtonProps) {
    return (
        
        if (isLink) {
            return (
                <>
                  <div className="
                        tailwind here
                  ">
                        <a href={`${linkTo}`} className="
                            tailwind here
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
                    className="
                        tailwind here
                    "
                    onClick=
                    >{`${text}`}</button>
                </>
            )
        }

    )
}
