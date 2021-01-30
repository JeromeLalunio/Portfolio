import './projects.scss';

import ProjectCard from './components/projects_card';

export default function Projects(){
    return (
        <div className = 'projects'>
            <h1>Featured Projects</h1>
            <ProjectCard />
        </div>
    );
}