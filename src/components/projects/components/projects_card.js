import background from '../../../assets/project_sample.png';

export default function ProjectCard(){
    return (
        <div className = 'projects-card'>
            <img className = 'projects-image' src = {background} alt = 'project'/>
            <h3>name</h3>
            <p>Irure laborum aliqua sint nostrud.</p>
            <button>Visit</button>
        </div>
    );
}