import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import SectionHeading from "../SectionHeading";

const NotFound = () => {
  return (
    <div className="bg-wheat dark:bg-codgray text-center pb-96">
      <SectionHeading text="Sidan kunde inte hittas" />
      <p className="text-black dark:text-sandybrown pb-5">
        Sidan du vill besöka finns tyvärr inte...
      </p>
      <Link to="/">
        <Button isLink={true} text="Tillbaka till start" />
      </Link>
    </div>
  );
};
export default NotFound;
