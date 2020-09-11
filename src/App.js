import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navigation.comp';
import LandingPage from './components/Landing.comp';
import CreateInvoice from './components/create-invoice.comp';
import History from './components/history.comp';

function App() {
  return (
   <Router>
     <NavBar />
     <br/>
     <div className="container">
       <Route path='/' exact component={LandingPage}/>
       <Route path='/invoice' component={CreateInvoice}/>
       <Route path='/history' component={History}/>
       </div>
    </Router>
  )
}

export default App;
