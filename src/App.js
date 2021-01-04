import './App.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';
import Contect from './pages/Contect';
import Navbar from './components/Navbar';


function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <div className="container">
     <Home/>
     <AboutMe/>
     <Portfolio/>
     <Service/>
     <Contect/>
     </div>
    </div>
  );
}

export default App;
