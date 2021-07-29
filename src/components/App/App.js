import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <p>hi</p>} />
      </Switch>
      <Redirect to='/' />
    </div>
  );
}

export default App;
