
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LabelBottomNavigation from './components/MainNav';
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import Search from './Pages/Search';
import Series from './Pages/Series';



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
    <Container>
    <Routes>
      <Route   exact path="/" element={ <Trending /> }/>
      <Route  exact path="/movies" element={ <Movies /> }/>
      <Route  exact path="/series" element={ <Series /> }/>
      <Route  exact path="/search" element={ <Search /> }/>
    </Routes>
    </Container>
    </div>
    <LabelBottomNavigation/>
    </BrowserRouter>
   
  );
}

export default App;
