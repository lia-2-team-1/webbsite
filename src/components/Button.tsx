import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  width?: string;
  isLink: boolean;
  linkTo?: string;
  func?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}

export default function Button({
  text,
  isLink,
  linkTo,
  func,
  width,
  className,
}: ButtonProps) {
  if (isLink) {
    return (
      <Link
        to={`${linkTo}`}
        className={`
                    inline-block
                    font-bold uppercase font-inter
                    py-1 px-2
                    my-1 mx-3
                    border-4 rounded-md border-transparent
                    transition-colors text-center
                    no-underline

                    bg-mineshaft text-sandybrown hover:bg-codgray active:bg-[#575757] active:text-mineshaft focus:bg-codgray focus:text-sandybrown focus:outline-sandybrown visited:text-sandybrown 
                    dark:bg-sandybrown dark:text-mineshaft dark:hover:bg-coffee dark:active:bg-sepiaskin dark:active:text-brandy dark:focus:text-mineshaft dark:focus:outline-white dark:visited:text-mineshaft 
                    focus:outline-3 focus:outline-offset-0 outline-none
                    disabled:bg-[#888888] disabled:text-black 
                    w-${!width ? "fit" : width}
                    ${className}
                    `}
      >
        {`${text}`}
      </Link>
    );
  } else {
    return (
      <button
        type="button"
        onClick={func}
        className={`
                    font-bold uppercase font-inter
                    py-1 px-2
                    my-1 mx-3
                    border-4 rounded-md border-transparent
                    transition-colors text-center

                    bg-mineshaft text-sandybrown hover:bg-codgray active:bg-[#575757] active:text-mineshaft focus:bg-codgray focus:text-sandybrown focus:outline-sandybrown visited:text-sandybrown 
                    dark:bg-sandybrown dark:text-mineshaft dark:hover:bg-coffee dark:active:bg-sepiaskin dark:active:text-brandy dark:focus:text-mineshaft dark:focus:outline-white dark:visited:text-mineshaft 
                    focus:outline-3 focus:outline-offset-0 outline-none
                    disabled:bg-[#888888] disabled:text-black 
                    w-${!width ? "fit" : width}
                    ${className}
                    `}
      >{`${text}`}</button>
    );
  }
}
