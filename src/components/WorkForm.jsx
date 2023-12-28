import React from "react"
import FormInput from "./FormInput"
import ButtonSubmit from "./ButtonSubmit"
export default function WorkForm () {
    return (
        <form>
            <h1>Your experience.</h1>
            <FormInput label='Company name'/>
            <FormInput label='Position' />
            <FormInput label='Main responsabilities' />
            <FormInput label='Date' />
            <ButtonSubmit/>
        </form>
    )
}