import React from "react";
import Card from "./Card";
import "../styles/curriculum.css";

export default function Curriculum({ data, setData }) {
  return (
    <>
      <div className="card container-presentation-cv">
        <h1 className="cv-presentation">
          Hey, I am <span>{data.name ? data.name : "Anonymous person"}</span>
        </h1>
        <p className="cv-presentation-description">{data.description}</p>
        <p className="cv-presentation-email">{data.email}</p>
      </div>
      <div className="card container-education">
        <div className="container-top">
          <img
            className="icon cv-education-icon"
            src="../src/assets/icons/education.svg"
            alt=""
          />
          <p className="cv-education-head-p">Education</p>
        </div>
        {data.education.map((educationExperience) => {
          return (
            <Card
              cvData={data}
              data={educationExperience}
              tipo="EDUCATION"
              key={educationExperience.id}
              setData={setData}
            />
          );
        })}
      </div>
      <div className="card container-work">
        <div className="container-top">
          <img
            className="icon cv-work-icon"
            src="../src/assets/icons/work.svg"
            alt=""
          />
          <p className="cv-work-head-p">Work</p>
        </div>
        {data.work.map((workExperience) => {
          console.log(workExperience.id);
          return (
            <Card
              cvData={data}
              data={workExperience}
              tipo="WORK"
              key={workExperience.id}
              setData={setData}
            />
          );
        })}
      </div>
    </>
  );
}
