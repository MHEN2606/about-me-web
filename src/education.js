import { Link } from 'react-router-dom';

const Education = ({education}) => {
    return(
        <>
        <h1>Education</h1>
        <p><i>Curriculum Vitae</i> of Matthew Mahendra</p>

        {education.map((education)=>
        
            <div className='column' key={education.id}>
                <div>
                    <h3>{education.school}</h3>
                    <p>Years: {education.years}</p>
                    <p>Majors: {education.major}</p>
                    <p><Link to={`/schooldetail/${education.id}`} key={education.id}>About the school</Link></p>
                </div>
            </div>
        
        )}
        </>
    );
};

export default Education;