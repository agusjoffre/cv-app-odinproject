import React, { useState } from "react";
import FormInput from "./FormInput";
import ButtonSubmit from "./ButtonSubmit";

export default function WorkForm({ setData }) {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsabilities, setResponsabilities] = useState("");
  const [date, setDate] = useState("");

  const handleCompany = (e) => {
    setCompanyName(e.target.value);
  };

  const handlePosition = (e) => {
    setPosition(e.target.value);
  };

  const handleResponsabilities = (e) => {
    setResponsabilities(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleWorkForm = (e) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      work: [
        ...prevData.work,
        { companyName, position, responsabilities, date },
      ],
    }));
    setCompanyName("");
    setPosition("");
    setResponsabilities("");
    setDate("");
  };

  return (
    <form onSubmit={handleWorkForm} className="form-card">
      <h1 className="cv-form-head">Your work experience:</h1>
      <FormInput
        label="Company name"
        handleChange={handleCompany}
        value={companyName}
      />
      <FormInput
        label="Position"
        handleChange={handlePosition}
        value={position}
      />
      <FormInput
        label="Main responsabilities"
        handleChange={handleResponsabilities}
        value={responsabilities}
      />
      <FormInput label="Date" handleChange={handleDate} value={date} />
      <ButtonSubmit />
    </form>
  );
}
