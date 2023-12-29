import React, { useState } from "react"
import FormInput from "./FormInput"
import ButtonSubmit from "./ButtonSubmit"
export default function EducationForm ( { setData } ) {

    const [ schoolName, setSchoolName ] = useState( '' )
    const [ degree, setDegree ] = useState( '' )
    const [ date, setDate ] = useState( '' )

    const handleEducationForm = ( e ) => {
        e.preventDefault()
        setData( ( prevData ) => ( {
            ...prevData,
            education: [...prevData.education, {schoolName, degree, date}]
        } ) )
        setSchoolName( '' )
        setDegree( '' )
        setDate( '' )
    }
    

    const handleSchoolName = ( e ) => {
        setSchoolName( e.target.value )
    }

    const handleDegree = ( e ) => {
        setDegree(e.target.value)
    }

    const handleDate = ( e ) => {
        setDate(e.target.value)
    }

    return (
         <form onSubmit={handleEducationForm} className="form-card"> 
            <h1 className="cv-form-head">Your education:</h1>
            <FormInput
                label='School name'
                value={ schoolName }
                type={ 'text' }
                handleChange={ handleSchoolName }
            />
            <FormInput
                label='Degree'
                value={ degree }
                type={ 'text' }
                handleChange={ handleDegree }
            />
            <FormInput
                label='Date'
                value={ date }
                type={ 'text' }
                handleChange={ handleDate }
            />
            <ButtonSubmit/>
        </form>
    )
}