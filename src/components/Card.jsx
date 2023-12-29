import React, { useState } from "react";
import InputEditFields from "./InputEditFields";

/* eslint-disable jsx-a11y/no-static-element-interactions */

export default function Card({ data, tipo, setData, cvData }) {
  const [showButtons, setShowButtons] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const handleShowButtons = () => {
    setShowButtons(!showButtons);
  };

  const handleDelete = () => {
    if (tipo === "EDUCATION") {
      setData((prevData) => ({
        ...prevData,
        education: cvData.education.filter((item) => item.id !== data.id),
      }));
    }
    if (tipo === "WORK") {
      setData((prevData) => ({
        ...prevData,
        work: cvData.work.filter((item) => item.id !== data.id),
      }));
    }
  };

  const handleEditShow = () => {
    setShowEditForm(!showEditForm);
  };

  // Buscar alguna alternativa a la anidacion de los ternarys.

  return (
    <div className="Card" onClick={handleShowButtons}>
      {showEditForm ? (
        <InputEditFields
          key={data.id}
          tipo={tipo}
          data={data}
          setData={setData}
          cvData={cvData}
          handleEditShow={handleEditShow}
        />
      ) : tipo === "EDUCATION" ? (
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
          <button
            type="button"
            className="btn Card-btn Card-btn-edit"
            onClick={handleEditShow}
          >
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
