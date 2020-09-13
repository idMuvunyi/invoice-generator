import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SubTotale from './subtotal-Text';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';



export default class CreateInvoice extends Component{
  constructor(props){
    super(props);
    
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePaymentMode = this.onChangePaymentMode.bind(this);
    this.onChangeDueDate = this.onChangeDueDate.bind(this);
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
      listItem:[],
      
      
      //last part payment states
      subTotal: 0,
      tax: 0,
      total: 0,
      amountPaid: 0,
      balanceDue: 0
      
      
       
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
  
    
    
    //third part events
     
  
    onChangeTax(e){
      this.setState({
        tax: e.target.value,
          
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
      
     
    
 
  updateName(key, value){
    this.setState({
      [key]: value,
      
    });
  }
   
  updateQuantity(key, value){
    this.setState({
      [key]:value,
    })
  }
  
  updateCost(key, value){
    this.setState({
      [key]:value,
    })
  }
  
  
  
  addItem(){
    
    if(this.state.itemQuantityOne === 0 || this.state.itemCostOne === 0 || this.state.itemNameOne === ''){
      return alert('Fill all product details !')
    }
    else{
    const amountItem = this.state.itemQuantityOne.slice() * this.state.itemCostOne.slice();
    const newItems={
      id: 1 + Math.random(),
      value: [this.state.itemNameOne.slice(), this.state.itemQuantityOne.slice(),
                this.state.itemCostOne.slice(), amountItem ]
     
    };
  
    const list =[...this.state.listItem];
    list.push(newItems);
    
    
    this.setState({
      listItem: list,
      itemNameOne: '',
      itemQuantityOne: '',
      itemCostOne: '',
      itemAmountOne: '',
     
     
    })
    
    console.log(list);
  }
  }
  
  deleteItem(id){
    const list = [...this.state.listItem];
    const updatedList = list.filter(item => item.id !== id);
    
    this.setState({
      listItem: updatedList,
    })
  }
  
  
  onSubmit(e, sub, tota, baldue){
  e.preventDefault();  
 
  
  
  //invoice PDF generating code triggered by button
  
   const doc= new jsPDF({
    //orientation: 'landscape',
    unit: 'in',
  
  });
  
 
  doc.autoTable({ html: '#my-table'})
 
// at least use for loop

this.state.listItem.map(item => (
  

doc.autoTable({
  body:[
    

],
  head: [[{ content:`INVOICE # ${this.state.invoiceNumber}`, rowSpan: 2 }, 'Product/Service', 'Quantity', 'Unit Cost','Amount' ]],
  body: [
    
    [{ content:``, rowSpan: 1 }, `${item.value[0]}`, `${item.value[1]}`, `${item.value[2]}`, `${item.value[3]}`],
    [{ content:`FROM : ${this.state.invoiceFrom}`, rowSpan: 1}],
    [{ content:`TO : ${this.state.billTo}`, rowSpan: 1}],
    [{ content:`PAYMENT MODE : ${this.state.paymentMode}`, rowSpan: 1}],
    [],
    [],
    [ '','','','', `Sub-Total : ${sub}`],
    ['','','','',`Tax Rate : ${this.state.tax}`],
    ['','','','',`Total : ${tota}`],
    ['','','','',`Amount Paid : ${this.state.amountPaid}`],
    ['','','','',`Balance Due: ${baldue}`],
  
   

  ],
})

  ))
  
  

  doc.save(`${this.state.billTo} - invoice`);
  
  
}

  
  

  render(){
    
    const amounts = this.state.listItem.map( transaction => transaction.value[3]);      
    const subt = amounts.reduce((acc, item) => (acc += item), 0).toFixed(0);
    
    // tax calc
    const taxes = (this.state.tax / 100) * subt;
    const arr = [subt, taxes];
    const getSum = (totals, num) =>{
      return totals + Math.round(num);
    }

    const ftotal = arr.reduce(getSum, 0);
    //
    const balanceDue = ftotal - Math.abs(this.state.amountPaid);
  
    
   
 
    return(
     <div>
         <h3>Create new invoice</h3>
         <br/>
         
             <form onSubmit={(e) => this.onSubmit(e, subt, ftotal, balanceDue)}>
             <div className="row">

               <div className="col-md-6">
                 <label>Invoice Number: </label>
                 <input type="number"
                        required
                        className="form-control"
                        value={this.state.invoiceNumber}
                        onChange={this.onChangeNumber}/>
               </div>
               
               <div className="col-md-6">
                 <label>Invoice From: </label>
                 <input type="text"
                        required
                        className="form-control"
                        value={this.state.invoiceFrom}
                        onChange={this.onChangeFrom}/>
               </div>
               <div className="col-md-6">
                 <label>Bill To: </label>
                 <input type="text"
                        required
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
                        required
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
                        onChange={e => this.updateName("itemNameOne", e.target.value)}
                       
                        />
               </div>
               <div className="col-md-2">
                 <label>Quantity: </label>
                 <input type="number"
                        
                        className="form-control"
                        value={this.state.itemQuantityOne}
                        onChange={e => this.updateQuantity("itemQuantityOne", e.target.value)}
                       />
               </div>
               
               <div className="col-md-2">
                 <label>Unit cost: </label>
                 <input type="number"
                        
                        className="form-control"
                        value={this.state.itemCostOne}
                        onChange={e => this.updateCost("itemCostOne", e.target.value)}
                        />
               </div>
               
               <div className="col-md-3">
                 <label>Amount: </label>
                 <input type="number"
                        className="form-control"
                        readOnly
                       value={(this.state.itemQuantityOne) * (this.state.itemCostOne) }
                      
                        />
               </div>
               
                 
               </div>
                
               <br/>
               <div className="row">
                 <div className="col-md-3">
                <div onClick={() => this.addItem()} className="btn btn-info btn-sm"> <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                 </svg> Add Item</div>
               </div>
               </div>
               
               <br/>
               <table className="table table-striped table-responsive table-sm ">
                 <thead className="bg-secondary text-white">
                 <tr>
                    
                    <td>Product / service Name</td>
                    <td>Quantity</td>
                    <td>Cost</td>
                    <td>Amount</td>
                    <td>Action</td>
                 </tr>
        </thead>
        <tbody>
                 {this.state.listItem.map(item => {
                   return(
                    <tr  key={item.id}>
                     
                     <td>{item.value[0]}</td>
                     <td>{item.value[1]}</td>
                     <td> RWF. {item.value[2]}</td>
                     <td>RWF. {item.value[3]}</td>
                     <td onClick={() => this.deleteItem(item.id)}
                       > <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                       <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                     </svg></td>
                     </tr>
                   );
                 })}
               
               </tbody>
               </table>
               <br/>
               <br/>
               <br/>
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
                
                <SubTotale tots={subt}  />
                
                 
                
                 <br/>
               </div>
               
               <div className="col-md-2">
                 <label>Tax (%) </label>
                 <input type="number"
                        required
                        min="1"
                        className="form-control"
                        value={this.state.tax}
                        onChange={this.onChangeTax}/>
                        <br/>
               </div>
               
               
               <div className="col-md-3">
               <p>Total:</p>
                 <p>RWF. { ftotal }</p>
                 
                 
                 <br/>
               </div>
               
               <div className="col-md-2">
                 <label>Amount paid: </label>
                 <input type="number"
                        required
                        className="form-control"
                        value={this.state.amountPaid}
                        onChange={this.onChangePaidAmount}/>
                        <br/>
               </div>
               
               <div className="col-md-3">
               <p>Balance Due:</p>
                 <p>RWF. { balanceDue }</p>
               </div>
               
               </div>
               <button className="btn btn-outline-primary" > <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg> Download Invoice</button>
             
               </form>
               <br/>
             
             </div>
           
   
    );
  }
}
