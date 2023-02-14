import './App.css';
import Navbar from './components/Navbar';
import ParalexScrol from './components/ParalexScrol';
import PurchaseVolcoin from './components/PurchaseVolcoin';
import Mid from './components/Mid';
import WhyUs from './components/WhyUs';
import OurTeam from './components/OurTeam';
import RoadMap from './components/RoadMap';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-black">
    <Navbar/>
    <PurchaseVolcoin/>
    <ParalexScrol/>
    <Mid/>
    <WhyUs/>
    <OurTeam/>
    <ParalexScrol/>
<RoadMap/>
<Footer/>
    </div>
    </>
  );
}

export default App;
