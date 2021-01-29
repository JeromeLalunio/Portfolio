import './hero.scss';
import background from '../../assets/background.png';

export default function Hero(){
    return <main className = 'hero-main'>
        <img className = 'hero-background' src={background} alt = 'background'/>
        <div className = 'hero-text'>
            <p className = 'hello'>Hello I'm</p>
            <h1 className = 'name'>Jerome Lalunio</h1>
            <p className = 'hero-message'>I'm a Web and App developer</p>
            <br /><br /><br /><br /><br /><br />
        </div>
    </main>
}