import React, { Component } from 'react';





export default class History extends Component{
  
  render(){
    return(
     <div>
         <h3>Generated Invoices</h3>
         <br/>
      
      <table className="table table-striped table-responsive ">
        <thead className="bg-info text-white">
          <tr>
           <th>Ref. No</th>
            <th>Invoice From</th>
            <th>Bill To</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
        <tr>
    <td>13</td>
    <td>AgriTechers Kigali Ltd</td>
    <td>Kanyarwanda Farms</td>
    <td>
      <button
         className="btn btn-sm btn-outline-success"
      >
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg> Invoice
      </button>
    </td>
  </tr>
        </tbody>
      </table>
      </div>
     

    );
  }
}