import './hero.scss';
import background from '../../assets/background.png';

export default function Hero(){
    return <main className = 'hero-main'>
        <img src={background} alt = 'background'/>
        <div className = 'hero-text'>
            <p className = 'hello'>Hello I'm</p>
            <h1 className = 'name'>Jerome Lalunio</h1>
            <p>And this is my Portfolio</p>
            <br />
            <br />
            <br />
        </div>
    </main>
}