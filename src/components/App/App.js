import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import ContactForm from '../ContactForm/ContactForm';
import Services from '../Services/Services';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Financing from '../Financing/Financing';
import Partners from '../Partners/Partners';
import Commercial from '../Commercial/Commercial';
import GutterColors from '../Gutters/Gutters';
import Footer from '../Footer/Footer';

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
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route exact path='/services' render={() => <Services name='Services' />} />
        <Route exact path='/who-we-are' render={() => <WhoWeAre name='Who We Are' />} />
        <Route exact path='/financing' render={() => <Financing name='Financing' />} />
        {/* <Route exact path='/partners' render={() => <Partners name='Partners' />} /> */}
        {/* <Route exact path='/commercial' render={() => <Commercial name='Commercial'/>} /> */}
        <Route exact path='/guttercolors.pdf' render={() => <GutterColors name='Gutter Colors' />} />
      </Switch>
      {/* < Footer className='footer' /> */}
      <ContactForm
        displayContactForm={displayContactForm}
        openContact={openContact}
      />
      <Redirect to='/' />
    </div>
  );
}

export default App;
