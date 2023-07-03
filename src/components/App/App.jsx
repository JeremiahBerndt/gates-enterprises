import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import ContactForm from '../ContactForm/ContactForm';
import Services from '../Services/Services.jsx';
import WhoWeAre from '../WhoWeAre/WhoWeAre.jsx';
import Financing from '../Financing/Financing';
import Commercial from '../Commercial/Commercial';
import GutterColors from '../Gutters/Gutters';
import Footer from '../Footer/Footer';
import RoofFaq from '../RoofFaq/RoofFaq';
import RoofQuote from '../RoofQuote/RoofQuote';
import BlogPage from '../RoofFaq/BlogPage';

function App() {
  const [openContact, setOpenContact] = useState(false);
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
        <Route exact path='/' element={<MainPage screenWidth={screenWidth} />} />
        <Route exact path='/services' element={<Services name='Services' />} />
        <Route exact path='/who-we-are' element={<WhoWeAre name='Who We Are' />} />
        <Route exact path='/financing' element={<Financing name='Financing' />} />
        <Route exact path='/commercial' element={<Commercial name='Commercial'/>} />
        <Route exact path='/get-a-quote' element={<RoofQuote name='Get a Quote'/>} />
        <Route exact path='/roof-faq' element={<RoofFaq name='Roof FAQ'/>} />
        <Route exact path='/guttercolors.pdf' element={<GutterColors name='Gutter Colors' />} />
        <Route path="roof-faq/roofblog/:id" element={<BlogPage />} />
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
