export default function FormInput ( { label, type, handleChange } ) {
    return (
        <label htmlFor={ label }>
            { type === 'textarea' ?
                <textarea placeholder={ label } onChange={ handleChange }/>
                : <input type="text" placeholder={ label } onChange={ handleChange }/> }
        </label>
    )
}