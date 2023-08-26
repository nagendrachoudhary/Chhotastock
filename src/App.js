import './App.css';
import Navbar from './Component/Navbar';
import {AiOutlineCaretDown} from 'react-icons/ai'
import { MainRoutes } from './routes/route';
import {BiSolidUpArrow} from 'react-icons/bi'
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <div id='container1'>

      <p id='toptext'>ANK 43000.05<AiOutlineCaretDown color='red'/> 0.009% BAJFINANCE 6,862.10 <AiOutlineCaretDown color='red'/> 0.010% BANKNIFTY 40,333 <BiSolidUpArrow color='green'/> 1.201% TATA 3000.05<AiOutlineCaretDown color='red'/> 0.009% NIFTY 40,333 <BiSolidUpArrow color='green'/> 1.201% FINNIFTY 40,333 <BiSolidUpArrow color='green'/> 1.201% TATA STEAL 833 <BiSolidUpArrow color='green'/> .51% HDFC 1800.05<AiOutlineCaretDown color='red'/> 0.7%  ICICI 2333 <BiSolidUpArrow color='green'/> 5.201% BOI 1500.05<AiOutlineCaretDown color='red'/> 0.009% BOB 4300.05<AiOutlineCaretDown color='red'/> 10.8% ANK 43000.05<AiOutlineCaretDown color='red'/> 0.009%</p>
      </div>
      <Navbar/>
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
