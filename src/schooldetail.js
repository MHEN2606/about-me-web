import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SchoolDetail = ({education}) => {
    const { id } = useParams();
    return(
        <>
        {education.map((education) =>
            <div className='column' key={education.id}>
                <div>
                    <h1>About {education.school}</h1>
                    <p><img src={education.imageUrl} width="400" height="200" alt={education.school}/></p>
                    <p>{education.detail}</p>
                </div>
            </div>
        )
        }
        </>
    );
}

export default SchoolDetail;