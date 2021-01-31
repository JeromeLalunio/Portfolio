import './skills.scss';

import SkillCardContainer from './components/skills_card_container';

export default function Skills(){
    return <div id = "skills">
        <h1>Skills</h1>

        <SkillCardContainer
            area = {"Web Development"}
            arr = {[
                'HTML', 'CSS', 'SCSS', 
                'BootStrap', 'Tailwind css', 'JavaScript',
                'React Js', 'Flutter',
            ]} 
        />

        <SkillCardContainer
            area = {"App Development"}
            arr = {[
                'Java', 'Kotlin', 'Dart', 
                'Flutter', 'React Native',
            ]} 
        />

        <SkillCardContainer
            area = {"Backend"}
            arr = {[
                'Python', 'Node Js', 'Mongo DB',
            ]} 
        />

        <SkillCardContainer
            area = {"Others"}
            arr = {[
                'Git', 'Github','Adobe Illustrator',
                
            ]} 
        />

    </div>
}