import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import Consonants from './components/Consonants/Consonants';
import Vowels from './components/Vowels/Vowels';
import Vocabulary from './components/Vocabulary/Vocabulary';
import Favorites from './components/Favorites/Favorites';




import './styles/main.css';

const App = () => (
  <div className='app-div container-fluid '>
    {/* <Header title="Project Base" /> */}
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
            <Route exact path="/Consonants" component={Consonants} />
            <Route exact path="/vowels" component={Vowels} />
            <Route exact path="/vocabulary" component={Vocabulary} />
            <Route exact path="/favorites" component={Favorites} />
        {/* OTHERWISE no path */}
        <Route
          render={() => <h1>404</h1>}
        />
      </Switch>
    </Router>

      
  </div>
);

export default App;
