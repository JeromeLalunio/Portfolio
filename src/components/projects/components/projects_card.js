

export default function ProjectCard(props){
    return (
        <div className = 'projects-card'>
            <img className = 'projects-image' src = {props.image} alt = 'project'/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a className = 'projects-link' target = '_blank' href = {props.link}>Visit</a>
        </div>
    );
}