import './App.scss';

import NavBar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Skills from './components/skills/skills';

function App() {
  return (
    <body>
        <NavBar />
        <Hero />
        <About />
        <Skills />
    </body>
  );
}

export default App;
