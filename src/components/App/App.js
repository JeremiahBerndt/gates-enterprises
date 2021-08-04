import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import Services from '../MainPage/Services/Services';
import WhoWeAre from '../MainPage/WhoWeAre/WhoWeAre';

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
        {/* <Route exact path='/financing' render={() => <Services />} />
        <Route exact path='/partners' render={() => <Services />} /> */}
      </Switch>
      <Footer />
      <ContactForm
        displayContactForm={displayContactForm}
        openContact={openContact}
      />
      <Redirect to='/' />
    </div>
  );
}

export default App;
