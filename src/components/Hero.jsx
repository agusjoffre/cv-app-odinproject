import React, { useState } from "react"
import Form from "./Form"
import Curriculum from "./Curriculum"

import "../styles/index.css"

export default function Hero () {
    
    const [ CVData, setCVData ] = useState( {
        name: '',
        description: '',
        email: '',
        school: [ {
            schoolName: '',
            title: '',
            date: ''
        } ],
        work: [ {
            companyName: '',
            position: '',
            mainResponsabilities: '',
            date: ''
        }]
    })


    return (
        <main>
            <aside>
                <Form setData={setCVData}/>
            </aside>
            <section className="curriculum-container">
                <Curriculum data={CVData}/>
            </section>
        </main>
    )
}