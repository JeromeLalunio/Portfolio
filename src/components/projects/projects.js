import './projects.scss';

import background from '../../assets/project_sample.png';

import ProjectCard from './components/projects_card';

export default function Projects(){
    return (
        <div className = 'projects'>
            <h1>Featured Projects</h1>
            <ProjectCard 
                image = {background}
                name = 'portfolio'
                description = 'Reprehenderit deserunt ex cupidatat ullamco irure.'
                link = 'https://jeromelalunio.github.io/portfolio'
            />
        </div>
    );
}