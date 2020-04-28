import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Nav';
import HomeComponent from './pages/Home';
// import AboutPage from './pages/About';
import AboutComponent from './pages/About';


function App() {
  return (
    <div>
      <Router>
        <div>
           <Navbar /> 
          <div>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
            {/* <Route exact path="/vitals" component={showVitals} />
            <Route exact path="/family" component={showFamily} />
            <Route exact path="/patients" component={Patients} />
            <Route exact path="/nurse" component={LoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignComponent} /> */}
            {/* <Route exact path="/readygo" component={showMic} /> */}
             {/* <Route exact path="/patients/:id" component={Detail} /> */}

          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
