

export default function ProjectCard(props){
    return (
        <div className = 'projects-card'>
            <img className = 'projects-image' src = {props.image} alt = 'project'/>
            <h3>{props.name}</h3>
            <p className = 'projects-description'>{props.description}</p>
            <a 
                className = 'projects-link' 
                target = '_blank' 
                href = {props.link} 
                rel="noopener noreferrer">
                    Visit
            </a>
        </div>
    );
}