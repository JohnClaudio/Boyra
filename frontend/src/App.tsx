import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
/*
import Footer from './components/estaticos/Footer/Footer';
import Navbar from './components/estaticos/navBar/Navbar';
import Login from './pages/login/Login';
import SobreNos from './pages/sobreNos/SobreNos';*/
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
   <>
<Router>
        <Switch>
      
          <div>
          <Navbar/>

          <Route exact path='/'>
          <Home/>
          </Route>

          <Route path='/home'>
          <Home/>     
          </Route>

          <Route path='/login'>
          <Login/>        
          </Route>

          <Route exact path='/fale-conosco'>
          <Home/>
          </Route>
          <Footer/>
          </div>

        </Switch>
    
        </Router>
   </>
  );
}

export default App;
