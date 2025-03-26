import { useState } from "react";
import { useForm } from "react-hook-form";
import PageHeading from "./PageHeading";
import ContactSection from "./ContactSection";

type FormInputs = {
  radio: string;
  email: string;
  header: string;
  body: string;
};

const StatusMessage = (str: any) => {
  return (
    <p
      className={`
    ${str.status == "Not Sent" ? "hidden" : "block"}
    ${str.status == "Pending" ? "dark:text-yellow-400 text-blue-400" : ""}
    ${str.status == "Failed" ? "text-red-600" : ""}
    ${str.status == "Success" ? "text-green-500" : ""}
    `}
    >{`${str.status}`}</p>
  );
};

export default function ContactForm() {
  const send = process.env.REACT_APP_SEND;
  const [disabled, setDisabled] = useState(false);
  const [emailStatus, setEmailStatus] = useState("Not Sent");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputs>();

  async function onSubmit(values: any) {
    setDisabled(true);
    setEmailStatus("Pending");
    try {
      const response = await fetch(send!, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          to: values.email,
          subject: `${values.radio} ${values.header}`,
          body: values.body,
        }),
      });
      switch (response.ok) {
        case false:
          setDisabled(false);
          setEmailStatus("Failed");
          throw new Error(`Response status: ${response.status}`);
        case true:
          setEmailStatus("Success");
          console.log(`Response status: ${response.status}`);
      }
    } catch (e) {
      console.error(`Error: ${e}`);
      setEmailStatus("Failed");
      setDisabled(false);
    }
  }

  const inputStyles: string =
    "rounded-md bg-[#2a2a33] border-2 border-brandy px-2 py-[3px] dark:border-sandybrown text-springwood";
  const buttonStyles: string = `
                    font-bold uppercase font-inter
                    py-1 px-2
                    border-4 rounded-md border-transparent
                    transition-colors text-center

                    bg-mineshaft text-sandybrown hover:bg-codgray active:bg-[#575757] active:text-mineshaft focus:bg-codgray focus:text-sandybrown focus:outline-sandybrown visited:text-sandybrown 
                    dark:bg-sandybrown dark:text-mineshaft dark:hover:bg-coffee dark:active:bg-sepiaskin dark:active:text-brandy dark:focus:text-mineshaft dark:focus:outline-white dark:visited:text-mineshaft 
                    focus:outline-3 focus:outline-offset-0 outline-none
                    disabled:bg-[#888888] disabled:text-black`;

  return (
    <div className="bg-brandy dark:bg-codgray pb-10">
      <div className="p-5">
        <PageHeading text="Kontakta oss" />
      </div>
      <ContactSection />
      <form
        className="w-5/6 md:w-3/5 lg:w-2/5 flex flex-col mx-auto bg-brandy dark:bg-transparent text-mineshaft dark:text-sandybrown"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="radio-group">
          Kontaktanledning:&nbsp;
          <span className="text-red-600">
            {errors.radio && errors.radio.message}
          </span>
        </label>
        <div id="radio-group" className=" flex flex-row gap-x-2">
          <input
            {...register("radio", {
              required: "* Required",
            })}
            type="radio"
            value="[sponsor]"
            id="radio-sponsor"
            disabled={disabled}
          />
          <label htmlFor="radio-sponsor">Sponsorfråga</label>
          <input
            {...register("radio", {
              required: "* Required",
            })}
            type="radio"
            value="[övrigt]"
            id="radio-misc"
            disabled={disabled}
          />
          <label htmlFor="radio-misc">Annat/Övrigt</label>
        </div>
        <label className="block" htmlFor="form-email">
          E-mail:&nbsp;
          <span className="text-red-600">
            {errors.email && errors.email.message}
          </span>
        </label>
        <input
          type="email"
          {...register("email", {
            required: "* Required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid E-mail Address",
            },
          })}
          placeholder="example@email.com"
          className={`${inputStyles}`}
          disabled={disabled}
        />

        <label htmlFor="form-header">
          Rubrik:&nbsp;
          <span className="text-red-600">
            {errors.header && errors.header.message}
          </span>
        </label>
        <input
          {...register("header", {
            required: "* Required",
          })}
          placeholder="Rubrik"
          id="form-header"
          className={`${inputStyles}`}
          disabled={disabled}
        />

        <label htmlFor="form-body">
          Meddelande:&nbsp;
          <span className="text-red-600">
            {errors.body && errors.body.message}
          </span>
        </label>
        <textarea
          {...register("body", {
            required: "* Required",
          })}
          placeholder="Skriv din fråga eller ditt meddelande här."
          id="form-body"
          className={`${inputStyles}`}
          disabled={disabled}
        ></textarea>
        <button
          className={`${buttonStyles} my-2`}
          type="submit"
          disabled={disabled}
        >
          Skicka
        </button>
        <StatusMessage status={emailStatus} />
      </form>
    </div>
  );
}
