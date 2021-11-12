import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*
import Footer from './components/estaticos/Footer/Footer';
import Navbar from './components/estaticos/navBar/Navbar';
import Login from './pages/login/Login';
import SobreNos from './pages/sobreNos/SobreNos';*/
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Contato from './pages/contato/Contato';
import Navbar from './components/estaticos/navbar/Navbar';
import Categoria from './components/estaticos/menuCategoria/MenuCategoria';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import CadastroProduto from './pages/cadastroProduto/CadastroProduto';
import CadastroCategoria from './pages/cadastroCategoria/CadastroCategoria';
import Produtos from './pages/produtos/Produtos';
import ListaCategoria  from './pages/listaCategoria/ListaCategoria';

const theme = createTheme({
  palette: {
    primary: {
      main: '#65B1C2',
      dark: '#000000'
    },
    secondary: {
      main: '#FFFFFF',
    }

  },
});


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Router>
          <Switch>

            <div>
              <Navbar />
              <Categoria />

              <Route exact path='/'>
                <Home />
                <Footer/>
              </Route>

              <Route path='/home'>
                <Home />
                <Footer/>
              </Route>


              <Route path='/cadastroUsuario'>
                <CadastroUsuario />              
              </Route>

              <Route path='/cadastroProduto'>
                <CadastroProduto />              
              </Route>

              <Route path='/cadastroCategoria'>
                <CadastroCategoria/>              
              </Route>

              <Route path='/listaCategoria'>
                <ListaCategoria />              
              </Route>

              <Route path='/login'>
                <Login />
                <Footer/>
              </Route>

              <Route exact path='/produtos'>
                <Produtos />
                <Footer/>
              </Route>



              <Route exact path='/contato'>
                <Contato />
                <Footer/>
              </Route>

            </div>

          </Switch>

        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;