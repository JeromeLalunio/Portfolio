import './hero.scss';
import background from '../../assets/background.png';

export default function Hero(){
    return (
        <main id = 'hero'>
            <div className = 'hero-text'>
                <p className = 'hello'>Hello I'm</p>
                <h1 className = 'name'>Jerome Lalunio</h1>
                <p className = 'hero-message'>I'm a Web and App developer</p>
            </div>
            <img className = 'hero-background' src={background} alt = 'background'/>
        </main>
    );
}