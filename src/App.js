import './App.scss';

import './components/navbar/navbar';
import NavBar from './components/navbar/navbar';
import Hero from './components/hero/hero';

function App() {
  return (
    <body>
      <div className = 'container'>
        <NavBar />
        <Hero />
      </div>
    </body>
  );
}

export default App;
