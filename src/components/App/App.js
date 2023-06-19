import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import ContactForm from '../ContactForm/ContactForm';
import Services from '../Services/Services.jsx';
import WhoWeAre from '../WhoWeAre/WhoWeAre.jsx';
import Financing from '../Financing/Financing';
import Commercial from '../Commercial/Commercial';
import GutterColors from '../Gutters/Gutters';
import Footer from '../Footer/Footer';
import RoofQuote from '../RoofQuote/RoofQuote.jsx';

function App() {
  const [openContact, setOpenContact] = useState(false);
  const [address, setAddress] = useState('')
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const displayContactForm = () => {
    setOpenContact(!openContact);
  };

  return (
    <div className='App' styles={{}}>
      <Header
        displayContactForm={displayContactForm}
        screenWidth={screenWidth}
      />
      <Routes>
        <Route exact path='/' element={<MainPage setAddress={setAddress} address={address}/>} />
        <Route exact path='/roof-quote' element={<RoofQuote name='Roof Quote' address={address}/>} />
        <Route exact path='/services' element={<Services name='Services' />} />
        <Route exact path='/who-we-are' element={<WhoWeAre name='Who We Are' />} />
        <Route exact path='/financing' element={<Financing name='Financing' />} />
        <Route exact path='/commercial' element={<Commercial name='Commercial'/>} />
        <Route exact path='/guttercolors.pdf' element={<GutterColors name='Gutter Colors' />} />
      </Routes>
      < Footer className='footer' />
      <ContactForm
        displayContactForm={displayContactForm}
        openContact={openContact}
      />
      {/* <Redirect to='/' /> */}
    </div>
  );
}

export default App;
