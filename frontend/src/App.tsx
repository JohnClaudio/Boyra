import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
/*
import Footer from './components/estaticos/Footer/Footer';
import Navbar from './components/estaticos/navBar/Navbar';
import Login from './pages/login/Login';
import SobreNos from './pages/sobreNos/SobreNos';
import Home from './pages/home/Home';*/


function App() {
  return (
   <>


        <Switch>
          <div>
          <Route exact path='/'>

          </Route>

            <Route path='/login'>
     
            </Route>

            <Route path='/home'>
       
            </Route>

            <Route path='/sobreNos'>
        
            </Route>
          </div>
        </Switch>
    
   
   </>
  );
}

export default App;
