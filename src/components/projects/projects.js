import './projects.scss';

import background from '../../assets/portfolio.png';
import my_music_streamer from '../../assets/my_music_streamer.png';

import ProjectCard from './components/projects_card';

export default function Projects(){
    return (
        <div className = 'projects'>
            <h1>Featured Projects</h1>
            <ProjectCard 
                image = {background}
                name = 'portfolio'
                description = 'My personal programmer portfolio'
                link = 'https://jeromelalunio.github.io/portfolio'
            />

            <ProjectCard 
                image = {my_music_streamer}
                name = 'My Music Streamer'
                description = 'An online music Streamer made with react'
                link = 'https://jeromelalunio.github.io/portfolio'
            />
        </div>
    );
}