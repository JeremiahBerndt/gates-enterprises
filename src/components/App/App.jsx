import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import GutterColors from '../Gutters/Gutters';
import Footer from '../Footer/Footer';
const ContactForm = lazy(() => import('../ContactForm/ContactForm.jsx'));
const RoofQuote = lazy(() => import('../RoofQuote/RoofQuote.jsx'));
const Services = lazy(() => import('../Services/Services.jsx'));
const WhoWeAre = lazy(() => import('../WhoWeAre/WhoWeAre.jsx'));
const Financing = lazy(() => import('../Financing/Financing.jsx'));
const Commercial = lazy(() => import('../Commercial/Commercial.jsx'));
const RoofFaq = lazy(() => import('../RoofFaq/RoofFaq.jsx'));
import BlogPage from '../RoofFaq/BlogPage';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import { Helmet } from 'react-helmet-async';
import './App.css';

function App() {
  const [openContact, setOpenContact] = useState(false);

  const displayContactForm = () => {
    setOpenContact(!openContact);
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get('schedule') === 'true') {
      // console.log(urlParams.get('schedule'))
      displayContactForm();
    }
  }, [])

  return (
    <div className='App' styles={{}}>
      <Header
        displayContactForm={displayContactForm}
      />
      <Helmet>
        <meta name="description" content="Colorado's premier roofing company. Serving Colorado for over 10 years." />
        <meta name="keywords" content="Get a roof quote, finance a roof, learn about hail damage and insurance claims" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Routes>
        <Route exact path='/' element={
          <MainPage displayContactForm={displayContactForm} />
        } />
        <Route exact path='/get-a-quote' element={
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem' }}>
                <CircularProgress sx={{ p: '10rem' }} size={32} color="inherit" />
              </div>
            }>
            <RoofQuote name='Get a Quote' />
          </Suspense>
        } />
        <Route exact path='/services' element={
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem' }}>
                <CircularProgress sx={{ p: '10rem' }} size={32} color="inherit" />
              </div>
            }>
            <Services name='Services' />
          </Suspense>
        } />
        <Route exact path='/who-we-are' element={
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem' }}>
                <CircularProgress sx={{ p: '10rem' }} size={32} color="inherit" />
              </div>
            }>
            <WhoWeAre name='Who We Are' />
          </Suspense>
        } />
        <Route exact path='/financing' element={
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem' }}>
                <CircularProgress sx={{ p: '10rem' }} size={32} color="inherit" />
              </div>
            }>
            <Financing name='Financing' />
          </Suspense>
        } />
        <Route exact path='/commercial' element={
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem' }}>
                <CircularProgress sx={{ p: '10rem' }} size={32} color="inherit" />
              </div>
            }>
            <Commercial name='Commercial' />
          </Suspense>
        } />
        <Route exact path='/roof-faq' element={
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10rem' }}>
                <CircularProgress sx={{ p: '10rem' }} size={32} color="inherit" />
              </div>
            }>
            <RoofFaq name='Roof FAQ' />
          </Suspense>
        } />
        <Route exact path='/guttercolors.pdf' element={<GutterColors name='Gutter Colors' />} />
        <Route path="roof-faq/roofblog/:id" element={<BlogPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      < Footer className='footer' />
      <Suspense
        fallback={<div></div>}>
        {openContact && <ContactForm
          displayContactForm={displayContactForm}
          openContact={openContact}
        />}
      </Suspense>
    </div>
  );
}

export default App;
