import React, { useState } from "react";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import WorkForm from "./WorkForm";
import "../styles/app.css";

export default function Form({ setData }) {
  const [id, setID] = useState("");

  const createID = () => {
    const random = crypto.randomUUID();
    setID(random);
  };

  return (
    <>
      <GeneralForm setData={setData} />
      <EducationForm setData={setData} createID={createID} id={id} />
      <WorkForm setData={setData} createID={createID} id={id} />
    </>
  );
}
