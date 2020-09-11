import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default class CreateInvoice extends Component{
  constructor(props){
    super(props);
    
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePaymentMode = this.onChangePaymentMode.bind(this);
    this.onChangeItemNameOne = this.onChangeItemNameOne.bind(this);
    this.changeItemQuantiy = this.changeItemQuantiy.bind(this);
    this.onChangeItemCostOne = this.onChangeItemCostOne.bind(this);
    this.onChangeItemAmountOne = this.onChangeItemAmountOne.bind(this);
    this.onChangeDueDate = this.onChangeDueDate.bind(this);
    this.onChangeSubTotal = this.onChangeSubTotal.bind(this);
    this.onChangeTax = this.onChangeTax.bind(this);
    this.onChangeTotal = this.onChangeTotal.bind(this);
    this.onChangePaidAmount = this.onChangePaidAmount.bind(this);
    this.onChangeBalanceDue = this.onChangeBalanceDue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state={
      // first part addresses states
      invoiceNumber: 0,
      invoiceFrom: '',
      billTo: '',
      date: new Date(),
      paymentMode: '',
      dueDate: new Date(),
      // second part dynamic items states
      itemNameOne:'',
      itemQuantityOne: 0,
      itemCostOne: 0,
      itemAmountOne: 0,
      
      //itemNameTwo:'',
      //itemQuantityTwo:'',
      //itemCostTwo: '',
      //itemAmountTwo:'',
      
      //last part payment states
      subTotal: '',
      tax: 0,
      total: '',
      amountPaid: 0,
      balanceDue: ''
      
      
       
    }
  }
  
  
  
  // first part events
  onChangeNumber(e){
    this.setState({
      invoiceNumber: e.target.value,
    }); 
    }
    
    onChangeFrom(e){
      this.setState({
        invoiceFrom: e.target.value,
      })
    }
    
    onChangeTo(e){
      this.setState({
        billTo: e.target.value,
      })
    }
    
    onChangeDate(date){
      this.setState({
        date: date,
      })
    }
    
    onChangePaymentMode(e){
      this.setState({
        paymentMode: e.target.value,
      })
    }
    
    onChangeDueDate(date){
      this.setState({
        dueDate: date,
      })
    }
  
    // second part events
    onChangeItemNameOne(e){
      
      this.setState({
        itemNameOne: e.target.value,
      })
    
    }
    
    changeItemQuantiy(e){
      
      this.setState({
        itemQuantityOne: e.target.value,
      })
    
    }
    
    onChangeItemCostOne(e){
      
      this.setState({
        itemCostOne: e.target.value,
      })
    
    }
    
    onChangeItemAmountOne(e){
      
      this.setState({
        itemAmountOne: e.target.value,
      })
    
    }
    
   
    
    // third part events
    
    onChangeSubTotal(e){
      this.setState({
        subTotal: e.target.value,
      })
    }
    
    onChangeTax(e){
      this.setState({
        tax: e.target.value,
        //total: ((this.state.itemQuantityOne) * (this.state.itemCostOne))  * this.state.tax/100  
      })
    }
    
    onChangeTotal(e){
      this.setState({
        total: e.target.value,
      })
    }
      onChangePaidAmount(e){
        this.setState({
          amountPaid: e.target.value,
        })
      }
     
      onChangeBalanceDue(e){
        this.setState({
          balanceDue: e.target.value,
        })
      }
      
      // submit form to the database
    
  onSubmit(e){
  e.preventDefault();  
  
  const invoiceDetails = {
    // first part states updated
    invoiceNumber: this.state.invoiceNumber,
    invoiceFrom: this.state.invoiceFrom,
    billTo: this.state.billTo,
    date: this.state.date,
    paymentMode: this.state.paymentMode,
    dueDate: this.state.dueDate,
    
    //second states
    itemNameOne: this.state.itemNameOne,
    itemQuantityOne: this.state.itemQuantityOne,
    itemCostOne: this.state.itemCostOne,
    itemAmountOne: this.state.itemAmountOne,
      
  
   
    //last part payment states updated
    subTotal: this.state.subTotal,
    tax: this.state.tax,
    total: this.state.total,
    amountPaid: this.state.amountPaid,
    balanceDue: this.state.balanceDue
  };
  
  console.log(invoiceDetails)
  }

  
  render(){
    return(
     <div>
         <h3>Create new invoice</h3>
         <br/>
         
             <form onSubmit={this.onSubmit}>
             <div className="row">

               <div className="col-md-6">
                 <label>Invoice Number: </label>
                 <input type="number"
                        className="form-control"
                        value={this.state.invoiceNumber}
                        onChange={this.onChangeNumber}/>
               </div>
               
               <div className="col-md-6">
                 <label>Invoice From: </label>
                 <input type="text"
                        className="form-control"
                        value={this.state.invoiceFrom}
                        onChange={this.onChangeFrom}/>
               </div>
               <div className="col-md-6">
                 <label>Bill To: </label>
                 <input type="text"
                        className="form-control"
                        value={this.state.billTo}
                        onChange={this.onChangeTo}/>
               </div>
               
               <div className="col-md-6">
                 <label>Date: </label><br/>
                 <DatePicker 
                        className="form-control"
                        selected={this.state.date}
                        onChange={this.onChangeDate}/>
               </div>
               
               <div className="col-md-6">
                 <label>Payment Mode: </label>
                 <input type="text"
                        className="form-control"
                        value={this.state.paymentMode}
                        onChange={this.onChangePaymentMode}/>
               </div>
               
               <div className="col-md-6">
                 <label>Due Date: </label><br/>
                 <DatePicker
                        className="form-control"
                        selected={this.state.dueDate}
                        onChange={this.onChangeDueDate}/>
               </div>
              
               </div>
               
               <br/>
               <nav aria-label="breadcrumb">
               <ol className="breadcrumb">
                 <li className="breadcrumb-item active" aria-current="page">Products details</li>
               </ol>
              </nav>
              
           
               <div className="row">
               <div className="col-md-5">
                 <label>Name of product / service: </label>
                 <input type="text"
                        className="form-control"
                        value={this.state.itemNameOne}
                        onChange={this.onChangeItemNameOne}
                       
                        />
               </div>
               <div className="col-md-2">
                 <label>Quantity: </label>
                 <input type="number"
                        className="form-control"
                        value={this.state.itemQuantityOne}
                        onChange={this.changeItemQuantiy}
                       />
               </div>
               
               <div className="col-md-2">
                 <label>cost: </label>
                 <input type="number"
                        className="form-control"
                        value={this.state.itemCostOne}
                        onChange={this.onChangeItemCostOne}
                        />
               </div>
               
               <div className="col-md-3">
                 <label>Amount: </label>
                 <input type="number"
                        className="form-control"
                        readOnly
                       value={(this.state.itemQuantityOne) * (this.state.itemCostOne) }
                       onClick={this.onChangeItemAmountOne}
                       
                        />
               </div>
               
                 
               </div>
                
               <br/>
               <div className="row">
                 <div className="col-md-3">
                <button  onClick={() => this.handleAddFields()} className="btn btn-info btn-sm"> <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                 </svg> new Item</button>
               </div>
               </div>
               <br/>
 
               <br/>
               <nav aria-label="breadcrumb" className="bg-info">
               <ol className="breadcrumb bg-info">
                 <li className="text-white" aria-current="page">Payment details</li>
               </ol>
              </nav>
               <br/>
              <div className="row">
               <div className="col-md-2">
                 <p>Sub-total:</p>
                 <p>RWF. {(this.state.itemQuantityOne) * (this.state.itemCostOne)}</p>
                 <br/>
               </div>
               
               <div className="col-md-2">
                 <label>Tax (%) </label>
                 <input type="number"
                        className="form-control"
                        value={this.state.tax}
                        onChange={this.onChangeTax}/>
                        <br/>
               </div>
               
               
               <div className="col-md-3">
               <p>Total:</p>
                 <p>RWF. {((this.state.itemQuantityOne) * (this.state.itemCostOne)) }</p>
                 <br/>
               </div>
               
               <div className="col-md-2">
                 <label>Amount paid: </label>
                 <input type="number"
                        className="form-control"
                        value={this.state.amountPaid}
                        onChange={this.onChangePaidAmount}/>
                        <br/>
               </div>
               
               <div className="col-md-3">
               <p>Balance Due:</p>
                 <p>RWF. {((this.state.itemQuantityOne) * (this.state.itemCostOne)) - (this.state.amountPaid)}</p>
               </div>
               
               </div>
               <button className="btn btn-outline-primary"> <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-receipt-cutoff" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v13h-1V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51L2 2.118V15H1V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zM0 15.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
  <path fillRule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
</svg> Generate Invoice</button>
             
               </form>
               <br/>
             
             </div>
           
   
    );
  }
}