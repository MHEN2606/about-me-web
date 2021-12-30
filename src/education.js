import { Link } from 'react-router-dom';

const Education = ({education}) => {
    return(
        <>
        <h1>Education</h1>
        <p><i>Curriculum Vitae</i> of Matthew Mahendra</p>

        {education.map((education)=>
        <Link to={`/schooldetail/${education.id}`} key={education.id}>
            <div className='column'>
                <div>
                    <h3>{education.school}</h3>
                    <p>Years: {education.years}</p>
                    <p>Majors: {education.major}</p>
                </div>
            </div>
        </Link>
        )}
        </>
    );
};

export default Education;