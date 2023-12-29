export default function Card ( { data, type } ) {

    return (
        <div className="Card">
            { type === 'EDUCATION' ? (
                <>
                <h1 className="Card-head">{ data.schoolName }</h1>
                <p className="Card-date">{data.date}</p>
                </>
            ) : (
                    <>
                        <h1 className="Card-head">{ data.companyName } - {data.position}</h1>
                        <p className="Card-date">{ data.date }</p>
                        <p className="Card-responsabilities">{data.responsabilities}</p>
                    </>
            ) }

            
        </div>
    )
}