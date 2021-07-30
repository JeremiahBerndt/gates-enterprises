import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
      </Switch>
      <Footer />
      <Redirect to='/' />
    </div>
  );
}

export default App;
