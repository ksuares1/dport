import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Nav';
import HomeComponent from './pages/Home';
// import AboutPage from './pages/About';
import AboutComponent from './pages/About';
import FluteRepairs from './pages/Flute';
import ScheduleComponent from './pages/Schedule';
// import HomePage from './components/Home';
import ContactPage from './components/Contact';


function App() {
  return (
    <div>
      <Router>
        <div>
            <Navbar />  
          <div>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
            <Route exact path="/flute" component={FluteRepairs} />
            <Route exact path="/contact" component={ContactPage} />
             <Route exact path="/schedule" component={ScheduleComponent} />

          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
