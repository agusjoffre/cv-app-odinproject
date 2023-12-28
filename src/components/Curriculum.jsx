

export default function Curriculum ( { data } ) {
    return (
        <>
            <h1 className="cv-presentation">Hey, I'm {''}
                { data.name ? data.name : 'Anonymous person' }
            </h1>
            <p className="cv-presentation-description">{ data.description }</p>
            <p className="cv-presentation-email">{ data.email }</p>
        </>
    )
}