import React, { useState } from "react";
import Form from "./Form";
import Curriculum from "./Curriculum";
import { initialPersonData } from "../personData";

import "../styles/index.css";
import "../styles/hero.css";

export default function Hero() {
  const [CVData, setCVData] = useState(initialPersonData);

  return (
    <main>
      <aside>
        <Form setData={setCVData} />
      </aside>
      <section className="curriculum-container">
        <Curriculum data={CVData} />
      </section>
    </main>
  );
}
