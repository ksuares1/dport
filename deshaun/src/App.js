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
import BlogComponent from './components/Blog';


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
             <Route exact path="/blog" component={BlogComponent} />

          </div>
        </div>
      </Router>
    </div>
      //  <footer className="footer-bg">
      //           <div className="footer-text">© 2020
      //       <a className="footer-text" href="https://dgktheflutist.com/"> dgktheflutist.com</a>
      //           </div>
      //       </footer>
  );
}

export default App;
