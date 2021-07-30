import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';

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
        <Route
          exact
          path='/'
          render={() => (
            <>
              <MainPage />
              <ContactForm
                displayContactForm={displayContactForm}
                openContact={openContact}
              />
            </>
          )}
        />
      </Switch>
      <Footer />
      <Redirect to='/' />
    </div>
  );
}

export default App;
