import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home';
import AboutUs from './pages/PageAboutUs';
import Event from './pages/PageEvent';


function App() {
  return (
    <div>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Event' element={<Event/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
