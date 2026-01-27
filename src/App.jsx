import React from 'react'
import './App.css'
import { useState } from 'react';
const App = () => {
  const [principle,setPrinciple]=useState(0);
  const [intrest,setInterest]=useState(0);
  const [year,setYear]=useState(0);
  const [EMI,setEMI]=useState(0);
  const [totalAmountPayable,setTotalAmountPayable]=useState(0);
  const [totalInterestPayable,setTotalInterestPayable]=useState(0);


  const handleInput=(e)=>{
    let value=e.target.value;
    let name=e.target.name;
    if(name=="principle"){
      setPrinciple(value)
    }
    else if(name=="interest"){
      setInterest(value)
    }
    else if (name=="year") {
      setYear(value)
    }
  }
  const calculateEMI=()=>{
    let r=intrest;
    if (principle&&intrest&&year) {
      r=r/12/100;
      let n =year*12
      let power = Math.pow(1 + r, n)

      let EMI=principle*((r*power)/(power-1))
      setEMI(EMI.toFixed(2))
      let totalAmountPayable=EMI*n;
      setTotalAmountPayable(totalAmountPayable.toFixed(2))

      let totalInterestPayable=totalAmountPayable - principle;
      setTotalInterestPayable(totalInterestPayable.toFixed(2))
    }
  }
  return (
    <div className='main-body'>
      <div className='emiBody'>

        <div className='emiContainer'>
          <h1 className='emiTitle'>EMI Calculator Tool</h1>

          <div className="emiInput-Container">

            <div className="emiInput">
              <h2 className='emiInput-title'>Loan Amount(P):</h2>
              <input type="text" className='input-box' placeholder='Amount' onChange={handleInput} name='principle'/>
            </div>

            <div className="emiInput">
              <h2 className='emiInput-title'>Annual Interest Rate(%):</h2>
              <input type="text" className='input-box'  placeholder='Interest' onChange={handleInput} name='interest'/>
            </div>

            <div className="emiInput">
              <h2 className='emiInput-title'>Loan Tenure(Years):</h2>
              <input type="text" className='input-box' placeholder='Year' onChange={handleInput} name='year'/>
            </div>

          </div>
          <div className="calclute-btn">
            <button onClick={calculateEMI}>Calculate EMI</button>
          </div>

          <div className="calculation">
            <h3 className='font-bold text-lg'>EMI(Monthly Installment):<span>{EMI}</span> </h3>
            <h3 className='font-bold text-lg'>Total Intrest Payable: <span>{totalAmountPayable}</span> </h3>
            <h3 className='font-bold text-lg'>Total Amount Payable: <span>{totalInterestPayable}</span> </h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
