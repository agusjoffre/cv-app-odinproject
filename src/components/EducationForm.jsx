import React from "react"
import FormInput from "./FormInput"
import ButtonSubmit from "./ButtonSubmit"
export default function EducationForm () {
    return (
         <form>
            <h1>Your education.</h1>
            <FormInput label='School name'/>
            <FormInput label='Degree' />
            <FormInput label='Date' />
            <ButtonSubmit/>
        </form>
    )
}