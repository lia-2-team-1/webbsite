interface LinkParams{
   target?: string; 
   text: string;
}

export default function Link({target, text}: LinkParams)
{
    return(
        <>
            <a href={`${target}`}
               className="
                tailwind here
               "
            >
                {`${text}`}
            </a>
        </>
    )
}
