import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPageLayout from './layouts/MainPageLayout';
import ProductSearchLayout from './layouts/ProductCollectionLayout';
import ProductPageLayout from './layouts/ProductPageLayout';
import Checkout from './components/CheckOut/CheckOut';
import './App.css';
import firebase from './firebase/firebase';
import 'firebase/app';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={MainPageLayout} />
          <Route path='/collections/:id' component={ProductSearchLayout} />
          <Route path='/products/:id' component={ProductPageLayout} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
