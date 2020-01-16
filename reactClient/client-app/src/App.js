import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

//import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/Navbar';
import Login from './components/admin/Login';
import { FundListing } from './components/public/FundListing';

import './App.css';

const App = () => 
    <Provider store={store}>
      <Router>
        <Fragment>   
          {/*<Header />*/}
          <Navbar />    

          <div className="container">
            <Route exact path='/' component={Login} /> 
          </div>   
          
          <section className="container">
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/fundlisting' component={FundListing} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
     
export default App;
