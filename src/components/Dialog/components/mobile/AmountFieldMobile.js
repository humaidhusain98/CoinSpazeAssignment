import React from 'react'
import { TextField } from '@mui/material'

export default function AmountFieldMobile({amount,setAmount}) {

  const onChangeAmount = (event) => {
    if (event.target.value) {
      setAmount(event.target.value);
    } else {
      setAmount(null);
    }
  };
  const handleClickToAmount=()=>{
    if(!amount || amount==='initialValue'){
      setAmount(null);
    }
  }

  return (
    <>
    <div className="label ml15">Amount <span className="red">*</span></div>
    <div className="text-field-cont ml15">
      <TextField 
      id="outlined-basic" 
      InputProps={{ inputProps: { min: 0} }}  
      autoComplete="off" 
      style={{width: 280}} 
      label="Please Enter Amount" 
      size="small" 
      variant="outlined" 
      value={amount==="initialValue"?"":amount} 
      onChange={onChangeAmount} 
      onClick={handleClickToAmount} 
      />
    
    </div>
    </>
  )
}
