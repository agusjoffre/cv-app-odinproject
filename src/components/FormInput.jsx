export default function FormInput ( { label, type, handleChange, value } ) {
    return (
        <label htmlFor={ label }>
            { type === 'textarea' ?
                <textarea placeholder={ label } onChange={ handleChange } value={value}/>
                : <input type="text" placeholder={ label } onChange={ handleChange } value={value}/> }
        </label>
    )
}