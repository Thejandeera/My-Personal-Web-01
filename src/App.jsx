import './app.scss';
import Contact from './components/contact/Contact.jsx';
import Cursor from './components/cursor/Cursor.jsx';
import Education from './components/education/Education.jsx';
import Hero from './components/hero/Hero.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Parallax from './components/parallax/Parallax.jsx';
import Projects from './components/projects/Projects.jsx';

const App = () => {
  return (
    <div>
      {/* <Cursor/> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Education">
        <Parallax type="Education" />
      </section>
      <section>
        <Education/>
      </section>
      <section id="Projects">
        <Parallax type="Projects" />
      </section>
      <Projects/>
      <section id="Contact">
        <Contact/>
      </section>
      
    </div>
  );
};

export default App;
