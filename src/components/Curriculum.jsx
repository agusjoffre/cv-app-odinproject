import Card from "./Card";
import '../styles/curriculum.css'


const random = crypto.randomUUID()


export default function Curriculum ( { data } ) {
    return (
        <>
            <div className="card container-presentation-cv">
            <h1 className="cv-presentation">Hey, I'm {''}
                <span>{ data.name ? data.name : 'Anonymous person' }</span>
            </h1>
            <p className="cv-presentation-description">{ data.description }</p>
                <p className="cv-presentation-email">{ data.email }</p>
            </div>
            <div className="card container-education">
                <div className="container-top">
                <img className="icon cv-education-icon" src="../src/assets/icons/education.svg" alt="" />
                <p className="cv-education-head-p">
                    Education
                    </p>
                </div>
                { data.education.map( ( educationExperience ) => {
                    return (
                        <Card data={ educationExperience } type={"EDUCATION"} key={ () => random } />
                    )
                })}
            </div>
            <div className="card container-work">
                <div className="container-top">
                <img className="icon cv-work-icon" src="../src/assets/icons/work.svg" alt="" />
                <p className="cv-work-head-p">
                    Work
                    </p>
                </div>
                { data.work.map( ( workExperience ) => {
                    return (
                         <Card data={ workExperience } type={"WORK"} key={() => random}/>
                    )
                })}
            </div>
            
        </>
    )
}