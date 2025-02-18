import './ContactForm.css'
export default function ContactForm() {
    return(
        <div className="
           bg-brandy dark:bg-black
        ">
        <form className="
        w-3/4
        md:w-1/2 
        flex flex-col 
        gap-y-2 mx-auto py-3
    
        ">
            <label for="radio-group">Kontaktanledning:</label>
            <div className="flex gap-x-2">
                <label>
                <input name="radio-group" type="radio" value="sponsor"/>
                &nbsp; Sponsorfråga
                </label>
                <label>
                <input name="radio-group" type="radio" value="other"/>
                &nbsp; Annat/Övrigt
                </label>
            </div>
            <label for="form-email">
            E-Mail:
            </label>
            <input name="form-email" type="text" />
            <label for="form-header">
            Rubrik:
            </label>
            <input name="form-header" type="text" />
            <label for="form-textarea">
            Fråga:
            </label>
            <textarea name="form-textarea" rows="4" cols="40" />
            <button type="submit" value="Skicka" 
                className=" 
                    font-bold uppercase font-inter
                    py-1 px-2
                    border-4 rounded-md border-transparent
                    transition-colors text-center

                    bg-mineshaft text-sandybrown hover:bg-codgray active:bg-[#575757] active:text-mineshaft focus:bg-codgray focus:text-sandybrown focus:outline-sandybrown visited:text-sandybrown 
                    dark:bg-sandybrown dark:text-mineshaft dark:hover:bg-coffee dark:active:bg-sepiaskin dark:active:text-brandy dark:focus:text-mineshaft dark:focus:outline-white dark:visited:text-mineshaft 
                    focus:outline-3 focus:outline-offset-0 outline-none
                    disabled:bg-[#888888] disabled:text-black 

                "
            >Skicka</button>
        </form>
        </div>
    )
}
