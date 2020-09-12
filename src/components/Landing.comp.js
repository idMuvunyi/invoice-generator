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
         <p className="lead">Lorem Ipsum is simply dummy text of the printing 
         and typesetting industry. Lorem Ipsum has been the industry's standard 
         dummy text ever since the 1500s, when an unknown printer took a galley 
         of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic typesetting,
           remaining essentially unchanged. It was popularised in the 1960s with 
           the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
         with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         </Animate>
         
         <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
         <hr className="my-4"/>
         <p>Lorem Ipsum has been the industry's standard dummy 
           text ever since the 1500s, when an unknown printer took 
           a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged.
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