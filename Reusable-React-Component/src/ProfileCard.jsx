import "./ProfileCard.css";

function ProfileCard(props) {
    return (
        <div className="profile-card">
            <img src={props.image} alt={props.name}/>
            <h2>{props.name}</h2>
            <p>{props.jobTitle}</p>
            <p>{props.bio}</p>
            <div className="profile-skills">
                <h3>Skills</h3>
                <ul>
                    {props.skills.map(function(skill) {
                        return <li key={skill}>{skill}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ProfileCard;