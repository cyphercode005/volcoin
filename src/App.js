import './App.css';
import Navbar from './components/Navbar';
import ParalexScrol from './components/ParalexScrol';
// import Paranew from './components/Paranew';
import WhyUs from './components/WhyUs';
import OurTeam from './components/OurTeam';
import RoadMap from './components/RoadMap';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Content from './components/Content';
// import Animation from './components/Animation';

function App() {
  return (
    <>
<div class=" bg-[url('/public/Photos/bg.jpg')]">
        <Navbar />
        <Hero/>
        <ParalexScrol/>
        {/* <Paranew/> */}
        {/* <Animation/> */}
        <Content />
        <WhyUs />
        <OurTeam />
        <ParalexScrol />
        <RoadMap />
        <Footer />
      </div>
    </>
  );
}

export default App;
