import React from "react"
import Form from "./Form"
import Curriculum from "./Curriculum"

import "../styles/index.css"

export default function Main () {
    return (
        <main>
            <aside>
                <Form/>
            </aside>
            <section className="curriculum-container">
                <Curriculum/>
            </section>
        </main>
    )
}