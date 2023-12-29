import React, { useState } from "react";

export default function Card({ data, type, setData, cvData }) {
  const [showButtons, setShowButtons] = useState(false);

  const handleDelete = () => {
    console.log(cvData);
    if (type === "EDUCATION") {
      setData((prevData) => ({
        ...prevData,
        education: cvData.education.filter((item) => item.id !== data.id),
      }));
    }
    if (type === "WORK") {
      setData((prevData) => ({
        ...prevData,
        work: cvData.work.filter((item) => item.id !== data.id),
      }));
    }
  };

  const handleShow = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="Card" onClick={handleShow} onKeyDown={handleShow}>
      {type === "EDUCATION" ? (
        <>
          <h1 className="Card-head">{data.schoolName}</h1>
          <p className="Card-degree">{data.degree}</p>
          <p className="Card-date">{data.date}</p>
        </>
      ) : (
        <>
          <h1 className="Card-head">
            {data.companyName} - {data.position}
          </h1>
          <p className="Card-date">{data.date}</p>
          <p className="Card-responsabilities">{data.responsabilities}</p>
        </>
      )}
      {showButtons && (
        <div className="Card-buttons-container">
          <button type="button" className="btn Card-btn Card-btn-edit">
            {/* Icono de editar */}
            Edit
          </button>
          <button
            type="button"
            className="btn Card-btn Card-btn-delete"
            onClick={handleDelete}
          >
            {/* Icono de eliminar */}
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
