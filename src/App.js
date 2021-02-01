import './App.scss';

import NavBar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className = 'body'>
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
