import './App.css';
import Navbar from './components/Navbar';
import ParalexScrol from './components/ParalexScrol';
import PurchaseVolcoin from './components/PurchaseVolcoin';
import Content from './components/Content';
import WhyUs from './components/WhyUs';
import OurTeam from './components/OurTeam';
import RoadMap from './components/RoadMap';
import Footer from './components/Footer';

function App() {
  return (
    <>
{/* <div class="bg-[url('/public/Photos/bg.jpg')]"> */}
<div class="bg-black">
        <Navbar />
        <PurchaseVolcoin />
        <ParalexScrol />
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
