import { Link } from 'react-router-dom';
const Activities = ({activities}) => {
    return(
        <>
        <h1>Activities</h1>
        <p>Matthew Mahendra's activities</p>

        {activities.map((activities)=>(
            <div className="column" key={activities.id}>
                <div>
                    <h3>{activities.name}</h3>
                    <p>Position: {activities.position}</p>
                    <p>Years Active: {activities.yearsActive}</p>
                </div>
            </div>
        ))}
        </>
    );
}

export default Activities