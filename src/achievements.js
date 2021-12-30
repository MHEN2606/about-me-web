import { Link } from 'react-router-dom';
const Achievements = ({ achievements} ) => {
    return(
        <>
        <h1>Achievements</h1>
        <p>Achievements by Matthew Mahendra</p>

        
        {achievements.map((achievements)=>(
            <div className="column" key={achievements.id}>
                <div>
                    <h3>{achievements.title}</h3>
                    <p>Issued: {achievements.date} by {achievements.awardedBy}</p>
                    <p>Detail: {achievements.description}</p>
                </div>     
            </div>
            ))}

        </>
    );
}

export default Achievements