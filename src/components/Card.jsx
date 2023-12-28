export default function Card ( { data } ) {
    
    /* Encontrar la forma de que pueda reutilizarse tanto para EDUCATION como para WORK */

    return (
        <div className="Card">
            <h1 className="Card-head">{ data.schoolName } - {data.degree}</h1>
            <p className="Card-date">{data.date }</p>
            <p className="Card-responsabilities">{/* if responsabilities entonces responsabilities */}</p>
            
        </div>
    )
}