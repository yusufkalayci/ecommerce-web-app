import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Page/Home/Home';
import About from './containers/Page/About/About';
import Product from './containers/Page/Product/Product';
import Checkout from './containers/Page/CheckOut/Checkout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/checkout' exact component={Checkout} />
        <Route path='/product/:id' exact component={Product} />
        <Route path='/about' component={About} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
