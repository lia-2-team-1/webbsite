import './Button.css';

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
        className="own-Button">
        {text == null || "" ? "TEXT IS NULL"  : text}
        </a>
    )
}
