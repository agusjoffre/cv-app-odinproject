import React, { useState } from "react";

export default function InputEditFields({
  tipo,
  data,
  setData,
  cvData,
  handleEditShow,
}) {
  const [schoolName, setSchoolName] = useState(data.schoolName);
  const [degree, setDegree] = useState(data.degree);
  const [educationDate, setEducationDate] = useState(data.date);
  const [companyName, setCompanyName] = useState(data.companyName);
  const [workDate, setWorkDate] = useState(data.date);
  const [position, setPosition] = useState(data.position);
  const [responsabilities, setResponsabilities] = useState(
    data.responsabilities,
  );

  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const handleSchoolName = (e) => {
    setSchoolName(e.target.value);
  };
  const handleDegree = (e) => {
    setDegree(e.target.value);
  };
  const handleEducationDate = (e) => {
    setEducationDate(e.target.value);
  };
  const handleWorkDate = (e) => {
    setWorkDate(e.target.value);
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
  };
  const handleResponsabilities = (e) => {
    setResponsabilities(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tipo === "EDUCATION") {
      const filteredEducationArr = cvData.education.filter(
        (item) => item.id !== data.id,
      );
      setData((prevData) => ({
        ...prevData,
        education: [
          ...filteredEducationArr,
          { schoolName, degree, date: educationDate, id: data.id },
        ],
      }));
    }
    if (tipo === "WORK") {
      const filteredWorkArr = cvData.work.filter((item) => item.id !== data.id);
      setData((prevData) => ({
        ...prevData,
        work: [
          ...filteredWorkArr,
          {
            companyName,
            position,
            date: workDate,
            responsabilities,
            id: data.id,
          },
        ],
      }));
    }
    handleEditShow();
  };

  if (tipo === "EDUCATION") {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          School name:
          <input
            placeholder="School name"
            type="text"
            className="Card-input"
            value={schoolName}
            onChange={handleSchoolName}
          />
        </label>
        <label>
          Degree:
          <input
            placeholder="Degree"
            type="text"
            className="Card-input"
            value={degree}
            onChange={handleDegree}
          />
        </label>
        <label>
          Date (from-to)
          <input
            placeholder="Date (from - to)"
            type="text"
            className="Card-input"
            value={educationDate}
            onChange={handleEducationDate}
          />
        </label>
        <button type="submit" className="btn Card-btn Card-btn-save">
          Save
        </button>
      </form>
    );
  }
  if (tipo === "WORK") {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Company name:
          <input
            placeholder="Company name"
            type="text"
            className="Card-input"
            value={companyName}
            onChange={handleCompanyName}
          />
        </label>
        <label>
          Job position:
          <input
            placeholder="Job position"
            type="text"
            className="Card-input"
            value={position}
            onChange={handlePosition}
          />
        </label>
        <label>
          Dates (from-to):
          <input
            placeholder="Dates (from - to)"
            type="text"
            className="Card-input"
            value={workDate}
            onChange={handleWorkDate}
          />
        </label>
        <label>
          Main Responsabilities:
          <input
            placeholder="Main responsabilities"
            type="text"
            className="Card-input"
            value={responsabilities}
            onChange={handleResponsabilities}
          />
        </label>
        <button type="submit" className="btn Card-btn Card-btn-save">
          Save
        </button>
      </form>
    );
  }
}
