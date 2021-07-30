import './App.css';
import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  const [openContact, setOpenContact] = useState(false);

  const displayContactForm = () => {
    setOpenContact(!openContact);
  };

  return (
    <div className='App'>
      <Header displayContactForm={displayContactForm} />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              <MainPage />
              {openContact && (
                <ContactForm displayContactForm={displayContactForm} />
              )}
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
