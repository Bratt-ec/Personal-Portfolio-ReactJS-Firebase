import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import  Menu  from "./components/Menu";
import Project from './components/Project';
import Services from './components/Services';
import Works from './components/Works';
// Components portfolio
import ReactJs from './components/ReactJs';
import Php from './components/Php';
import Javascript from './components/Javascript';
import Html from './components/Html';
import Csharp from './components/Csharp';
import Nodejs from './components/Nodejs';



function App() {

  const [name, saveName] = useState('');
  const [mail, saveMail] = useState('');
  const [proj, saveProj] = useState('');
  const [msj, saveMsj] = useState('');

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div >
              <main className="l-main">
                <Menu />
                <Home />
                <About />
                <Education />
                <Services />
                <Project />
                <Works />
                <Contact 
                  name = {name}
                  mail = {mail}
                  proj = {proj}
                  msj = {msj}
                  saveName = {saveName}
                  saveMail = {saveMail}
                  saveProj = {saveProj}
                  saveMsj = {saveMsj}
                />
                <Footer />
              </main>              
          </div>
        </Route>

        <Route path="/react">
          <div >
              <main className="l-main">
                <ReactJs />
              </main>              
          </div>
        </Route>

        
        <Route path="/php">
          <div >
              <main className="l-main">
                <Php />
              </main>              
          </div>
        </Route>

        
        <Route path="/javascript">
          <div >
              <main className="l-main">
                <Javascript />
              </main>              
          </div>
        </Route>

        
        <Route path="/html">
          <div >
              <main className="l-main">
                <Html />
              </main>              
          </div>
        </Route>

        
        <Route path="/csharp">
          <div >
              <main className="l-main">
                <Csharp />
              </main>              
          </div>
        </Route>

        
        <Route path="/node">
          <div >
              <main className="l-main">
                <Nodejs />
              </main>              
          </div>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
