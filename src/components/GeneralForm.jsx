import React, { useState } from "react"
import FormInput from "./FormInput"
import ButtonSubmit from "./ButtonSubmit"

export default function GeneralForm ({setData}) {

    const [ name, setName ] = useState( '' )
    const [ email, setEmail ] = useState( '' )
    const [ description, setDescription ] = useState('')

    const handleName = ( e ) => {
        setName( e.target.value )
    }

    const handleEmail = ( e ) => {
        setEmail( e.target.value )
    }

    const handleDescription = ( e ) => {
        setDescription( e.target.value )
    }

    const handleGeneralForm = ( e ) => {
        e.preventDefault()
        setData((prevData) => ({
            ...prevData,
            name: name,
            email: email,
            description: description
        } ) )
    }


    return (
        <form onSubmit={handleGeneralForm}>
            <h1>General information about you.</h1>
            <FormInput label='Name' handleChange={handleName}/>
            <FormInput label='Email' handleChange={handleEmail}/>
            <FormInput label='Description' type={ 'textarea' } handleChange={handleDescription} />
            <ButtonSubmit/>
        </form>
    )
}