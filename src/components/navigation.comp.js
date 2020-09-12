import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class NavBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <Link to="/" className="navbar-brand"><svg width="1.4em" height="1.4em" viewBox="0 0 16 16" className="bi bi-bookmark-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
  <path fillRule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
</svg> Invoice Generator</Link>
            
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
          <li className="nav-item">
          <Link to="/invoice" className="nav-link"> New Invoice
            </Link>
          </li>
        
        </ul>
        
      </div>
    </nav>
    
    
    
    
    );
  }
}