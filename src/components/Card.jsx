import React, { useState } from "react";

export default function Card({ data, type }) {
  const [showButtons, setShowButtons] = useState(false);

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
            Edit
          </button>
          <button type="button" className="btn Card-btn Card-btn-delete">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
