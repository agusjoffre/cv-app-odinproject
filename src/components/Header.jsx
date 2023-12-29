import React from "react";

export default function Header() {
  return (
    <header>
      <div className="top-h">
        <h1 className="app-title">Curriculum Vitae Builder</h1>
        <img className="icon" src="./icons/curriculum.svg" alt="" />
      </div>
      <p className="app-description">Create your CV in just a few clicks!</p>
    </header>
  );
}
