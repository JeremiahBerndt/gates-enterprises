import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import Services from '../MainPage/Services/Services';
import WhoWeAre from '../MainPage/WhoWeAre/WhoWeAre';
import Financing from '../MainPage/Financing/Financing';
import Partners from '../MainPage/Partners/Partners';

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
    <div className='App'>
      <Header
        displayContactForm={displayContactForm}
        screenWidth={screenWidth}
      />
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route exact path='/services' render={() => <Services name='Services'/>} />
        <Route exact path='/who-we-are' render={() => <WhoWeAre name='Who We Are'/>} />
        <Route exact path='/financing' render={() => <Financing name='Financing'/>} />
        <Route exact path='/partners' render={() => <Partners name='Partners'/>} />
      </Switch>
      {/* <Footer /> */}
      <ContactForm
        displayContactForm={displayContactForm}
        openContact={openContact}
      />
      <Redirect to='/' />
    </div>
  );
}

export default App;
