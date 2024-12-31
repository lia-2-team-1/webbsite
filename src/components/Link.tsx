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
               block px-4 py-2 text-gold hover:bg-gray-200 uppercase
               "
            >
                {`${text}`}
            </a>
        </>
    )
}
