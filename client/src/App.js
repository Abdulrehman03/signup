import React from 'react';
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Landing } from './components/layout/Landing';
import { Login } from './components/auth/Login';
import  Signup  from './components/auth/Signup';

//Redux
import { Provider } from 'react-redux'
import store from './store'


const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        {/* <h1>Test App</h1> */}
      
        <Route exact path='/' component={Signup} />
      </Fragment>
    </Router>
  </Provider>
);
export default App;
