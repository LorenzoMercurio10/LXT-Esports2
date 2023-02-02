import './App.css';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import Video from './Video/Video';
import Blog from './Blog/Blog';
import About from './About/About';
import Benefit from './About/Benefit';
import Teams from './Teams/Teams';
import Staff from './Teams/Staff';
import Academy from './Teams/Academy';
import Partner from './Partner/Partner';
import Contact from './Contact/Contact';

function App() {

  return (
    <>
      <CustomNavbar />
      <Video />
      <About />
      <Benefit />
      <Blog />
      <Teams />
      <Staff />
      <Partner />
      <Academy />
      <Contact />
    </>
  );
}

export default App;



