//insert dependancies
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Container } from '@mui/material';

//insert pages and component(s)
import Nav from './components/nav'
import Home from './components/home';
import About from './components/about';
import Recipes from './components/recipes';

function App() {
  return (
    <div>


{/*Container (background) */}
      <Container maxWidth="lg" className='container'> 
{/*Navigation Menu */}
      <Nav/>
{/*Insert paths for each page */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
