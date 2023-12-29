import React, { useState } from "react";
import FormInput from "./FormInput";
import ButtonSubmit from "./ButtonSubmit";

export default function GeneralForm({ setData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleGeneralForm = (e) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      name,
      email,
      description,
    }));
    setName("");
    setEmail("");
    setDescription("");
  };

  return (
    <form onSubmit={handleGeneralForm} className="form-card">
      <h1 className="cv-form-head">General information about you:</h1>
      <FormInput
        label="Name"
        value={name}
        type="text"
        handleChange={handleName}
      />
      <FormInput
        label="Email"
        value={email}
        type="text"
        handleChange={handleEmail}
      />
      <FormInput
        label="Description"
        value={description}
        type="textarea"
        handleChange={handleDescription}
      />
      <ButtonSubmit />
    </form>
  );
}
