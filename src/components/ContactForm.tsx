import "./ContactForm.css";
import { useState } from "react";
import { EditorProvider } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";

export default function ContactForm() {
  const send = process.env.REACT_APP_SEND;
  const [emailTag, setEmailTag] = useState("");
  const [emailFrom, setEmailFrom] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailReact, setEmailReact] = useState("");

  const extensions = [StarterKit];

  const Tiptap = () => {
    return (
      <>
        <EditorProvider
          extensions={extensions}
          content={emailReact == "" ? "Write here <br/> <br/>" : emailReact}
          editorContainerProps={{ className: "rounded-md border-2 border-wheat dark:border-sandybrown px-1 bg-[#2b2a33]" }}
          onBlur={({ editor }) => {
            setEmailReact(editor.getHTML());
            console.log(emailReact);
          }}
        ></EditorProvider>
      </>
    );
  };
  async function handleLog(): Promise<void> {
    if (handleValidation()) {
      await fetch(send!, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          from: emailFrom,
          subject: `${emailTag} ${emailSubject}`,
          react: emailReact,
        }),
      });
    } else {
      console.log("validuation returned: " + handleValidation());
    }
  }

  function emailValidation(email: any): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  } // valid if returns true

  const handleValidation = () => {
    if (emailTag.trim() == "") {
      console.log("validation Tag");
      return false;
    }
    if (emailFrom == "" || !emailValidation(emailFrom)) {
      console.log("validation From");
      return false;
    }
    if (emailSubject.trim() == "") {
      console.log("validation Subject");
      return false;
    }
    if (emailReact.trim() == "") {
      console.log("validation React");
      return false;
    }
    return true;
  };
  return (
    <div
      className="
           bg-brandy dark:bg-black
        "
    >
      <form
        className="
        w-3/4
        md:w-1/2 
        flex flex-col 
        gap-y-2 mx-auto py-3
    
        "
      >
        <label htmlFor="radio-group">
          Kontaktanledning:
        </label>
        <h4
          id="err-radio"
          className={`text-red-800 ${emailTag.trim() == "" ? "block" : "hidden"}`}
        >
          Please choose a reason for contact.
        </h4>
        <div className="flex gap-x-2">
          <label>
            <input
              name="radio-group"
              type="radio"
              value="[sponsor] "
              onChange={(e) => setEmailTag(e.target.value)}
              required
            />
            &nbsp; Sponsorfråga
          </label>
          <label>
            <input
              name="radio-group"
              type="radio"
              value="[misc] "
              onChange={(e) => setEmailTag(e.target.value)}
            />
            &nbsp; Annat/Övrigt
          </label>
        </div>
        <label htmlFor="form-email">E-Mail:</label>
        <h4
          id="err-email"
          className={`text-red-800 ${emailFrom.trim() == "" || !emailValidation(emailFrom.trim()) ? "block" : "hidden"}`}
        >
          Please give a valid e-mail!
        </h4>
        <input
          name="form-email"
          type="text"
          value={emailFrom}
          onChange={(e) => setEmailFrom(e.target.value)}
        />
        <label htmlFor="form-header">Rubrik:</label>
        <h4
          id="err-subject"
          className={`text-red-800 ${emailSubject.trim() == "" ? "block" : "hidden"}`}
        >
          Please give a subject to the e-mail!
        </h4>
        <input
          name="form-header"
          type="text"
          value={emailSubject}
          onChange={(e) => setEmailSubject(e.target.value)}
        />
        <label htmlFor="form-textarea">Fråga:</label>
        <h4
          id="err-react"
          className={`text-red-800 ${emailReact == "" ? "block" : "hidden"}`}
        >
          This needs to be filled out!
        </h4>
        <Tiptap></Tiptap>
        <button
          type="button"
          value="Skicka"
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
          onClick={handleLog}
        >
          Skicka
        </button>
      </form>
    </div>
  );
}
