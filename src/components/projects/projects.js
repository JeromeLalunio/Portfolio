import './projects.scss';

import my_music_streamer from '../../assets/my_music_streamer01.png';

import ProjectCard from './components/projects_card';

export default function Projects(){
    return (
        <div id = 'projects'>
            <h1 className = 'projects-title'>Featured Projects</h1>
            <ProjectCard 
                image = {my_music_streamer}
                name = 'My Music Streamer'
                description = 'An online music Streamer made with react'
                link = 'https://jeromelalunio.github.io/my-music-streamer'
            />
        </div>
    );
}