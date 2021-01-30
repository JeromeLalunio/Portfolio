import SkillsCard from './skills_card';

export default function SkillCardContainer(props){
    return (
        <div>
            <h3>{props.area}</h3>

            <div className = 'skills-card-container'>
                {props.arr.map(item => <SkillsCard skillItem = {item} />)}
            </div>

        </div>
    )
}