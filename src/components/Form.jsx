import React from "react"
import GeneralForm from "./GeneralForm"
import EducationForm from "./EducationForm"
import WorkForm from "./WorkForm"

export default function Form ( { setData } ) {
    

    return (
        <>
            <GeneralForm  setData={setData}/>
            <EducationForm setData={setData} />
            <WorkForm setData={setData}/>
        </>
    );
}
    
