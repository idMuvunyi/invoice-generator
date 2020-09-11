import React, { Component } from 'react';
import { Animate, AnimateGroup } from "react-simple-animate";




export default class LandingPage extends Component{
  
  render(){
    return(
     
     <div className="jumbotron">
     <AnimateGroup play>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
         <h2 className="display-4">Welcome!</h2>
         </Animate>
         
         <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
         <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
         This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
         This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
         </Animate>
         
         <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
         <hr className="my-4"/>
         <p>It uses utility classes for typography and spacing to space content out within the larger container.
         It uses utility classes for typography and spacing to space content out within the larger container.
         </p>
         </Animate>
         <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={3}>
         <a className="btn btn-outline-info btn-lg" href="/" role="button">Let's get Started</a>
         </Animate>
    </AnimateGroup>
    
      </div>
     
    
    );
  }
}