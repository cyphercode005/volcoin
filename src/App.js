import './App.css';
import Navbar from './components/Navbar';
import ParalexScrol from './components/ParalexScrol';
import PurchaseVolcoin from './components/PurchaseVolcoin';
import Mid from './components/Mid';

function App() {
  return (
    <>
      <div className="bg-black">
    <Navbar/>
    <PurchaseVolcoin/>
    <ParalexScrol/>
    <Mid/>
    </div>
    </>
  );
}

export default App;
