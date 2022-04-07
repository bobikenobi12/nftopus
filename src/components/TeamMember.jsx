import "../css/TeamMember.css";

export const TeamMember = ({img, name, description}) => {
    return (
        <div className="team-member">
            <img src={img} alt="team member" className="team-member-img"/>
            <h1 className="team-member-name">{name}</h1>
            <p className="team-member-description">{description}</p>
        </div>
    )
}