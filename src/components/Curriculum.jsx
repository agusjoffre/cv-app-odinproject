import Card from "./Card";

const random = crypto.randomUUID()


export default function Curriculum ( { data } ) {
    return (
        <>
            <div className="card container-presentation-cv">
            <h1 className="cv-presentation">Hey, I'm {''}
                { data.name ? data.name : 'Anonymous person' }
            </h1>
            <p className="cv-presentation-description">{ data.description }</p>
                <p className="cv-presentation-email">{ data.email }</p>
            </div>
            <div className="card container-education">
                <img className="icon cv-education-icon" src="../src/assets/icons/education.svg" alt="" />
                <p className="cv-education-head-p">
                    Education
                </p>
                { data.education.map( ( educationExperience ) => {
                    return (
                         <Card data={ educationExperience } key={() => random}/>
                    )
                })}
            </div>
            
        </>
    )
}